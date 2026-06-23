const fs = require('fs');

async function testFetchUA(ua) {
  const query = 'clothespin';
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': ua,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      }
    });
    if (!response.ok) {
      console.log(`UA failed with status: ${response.status}`);
      return;
    }
    const html = await response.text();
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : "None";
    console.log(`UA: ${ua.substring(0, 50)}...`);
    console.log(`  Length: ${html.length}`);
    console.log(`  Title: ${title}`);
    console.log(`  Has redirect?`, html.toLowerCase().includes('http-equiv="refresh"'));
    
    // Look for image tags
    const imgUrls = [];
    const imgTagRegex = /<img[^>]+src="([^"]+)"/gi;
    let match;
    while ((match = imgTagRegex.exec(html)) !== null) {
      imgUrls.push(match[1]);
    }
    console.log(`  Found ${imgUrls.length} image tags.`);
    if (imgUrls.length > 0) {
      console.log("  First image sources:", imgUrls.slice(0, 3));
    }
    
    // Write last successful html to file
    if (imgUrls.length > 0) {
      fs.writeFileSync('scratch/google_images_success.html', html);
    }
  } catch (err) {
    console.error(`Error for ${ua.substring(0, 30)}:`, err.message);
  }
}

const uas = [
  // Very old iOS
  'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4',
  // Very old Android
  'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
  // Older Safari
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7',
  // Wget or Curl
  'Wget/1.21.1',
  // Older Firefox
  'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1',
  // Internet Explorer 11
  'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'
];

async function run() {
  for (const ua of uas) {
    await testFetchUA(ua);
    console.log("-----------------------------------------");
  }
}

run();
