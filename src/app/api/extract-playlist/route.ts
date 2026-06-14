import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const playlistId = searchParams.get('playlistId');

    if (!playlistId) {
      return NextResponse.json({ error: 'Missing playlistId parameter' }, { status: 400 });
    }

    const response = await fetch(`https://www.youtube.com/playlist?list=${playlistId}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch YouTube playlist: ${response.statusText}`);
    }

    const html = await response.text();
    
    // Parse the playlist items from ytInitialData JSON in HTML
    const jsonMatch = html.match(/var ytInitialData = ({.*?});/);
    const videos: { videoId: string; title: string; url: string }[] = [];

    if (jsonMatch) {
      try {
        const json = JSON.parse(jsonMatch[1]);
        
        // Drill down to structured playlistVideoListRenderer contents
        const tabs = json.contents?.twoColumnBrowseResultsRenderer?.tabs;
        const tab = tabs?.[0]?.tabRenderer;
        const sectionContents = tab?.content?.sectionListRenderer?.contents;
        const itemSection = sectionContents?.[0]?.itemSectionRenderer;
        const videoList = itemSection?.contents?.[0]?.playlistVideoListRenderer;
        const contents = videoList?.contents || [];

        for (const item of contents) {
          const video = item.playlistVideoRenderer;
          if (video && video.videoId) {
            const videoId = video.videoId;
            const title = video.title?.runs?.[0]?.text || "Untitled Video";
            videos.push({
              videoId,
              title,
              url: `https://www.youtube.com/watch?v=${videoId}`
            });
          }
        }
      } catch (e) {
        console.error("Error parsing ytInitialData structured contents:", e);
      }
    }

    // Fallback: If ytInitialData parse fails or yields empty list, try regex parsing
    if (videos.length === 0) {
      // Find all matches for videoIds and their titles or links
      const videoIdRegex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
      const videoIds = new Set<string>();
      let match;
      while ((match = videoIdRegex.exec(html)) !== null) {
        videoIds.add(match[1]);
      }
      
      return NextResponse.json({
        videos: Array.from(videoIds).map(id => ({
          videoId: id,
          title: 'YouTube Video',
          url: `https://www.youtube.com/watch?v=${id}`
        }))
      });
    }

    return NextResponse.json({ videos });
  } catch (error: any) {
    console.error('Error in extract-playlist API:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
