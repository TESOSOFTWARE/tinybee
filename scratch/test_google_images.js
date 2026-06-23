const fs = require('fs');

async function testFetch() {
  const query = 'clothespin';
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`;
  
  const userAgents = [
    // Standard desktop
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    // Mobile/old browser (often gets simpler HTML which is easier to parse)
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
  ];

  for (const ua of userAgents) {
    console.log(`Trying UA: ${ua}`);
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': ua,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
        }
      });
      if (!response.ok) {
        console.log(`Failed: ${response.status} ${response.statusText}`);
        continue;
      }
      const html = await response.text();
      fs.writeFileSync('scratch/google_images_response.html', html);
      console.log(`Fetched successfully. Response length: ${html.length}`);
      
      // Let's search for image patterns
      // Regular Google Images page often contains JSON/script blocks with URLs
      // E.g. ["http...", width, height] or image URLs starting with https://encrypted-tbn0.gstatic.com/images?q=
      // Let's find all gstatic image URLs
      const gstaticUrls = [];
      const gstaticRegex = /https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=[^"\s'\\&]+/g;
      let match;
      while ((match = gstaticRegex.exec(html)) !== null) {
        gstaticUrls.push(match[0]);
      }
      console.log(`Found ${gstaticUrls.length} encrypted-tbn0.gstatic.com image URLs`);
      if (gstaticUrls.length > 0) {
        console.log("First 5 gstatic URLs:", gstaticUrls.slice(0, 5));
      }

      // Also look for full resolution image URLs in script blocks
      // Often, they look like: ["https://some-website.com/image.jpg", 1024, 768]
      // Or they are inside AF_initDataCallback
      // Let's search for http/https URLs that end in jpg/jpeg/png
      const imgUrls = [];
      const imgUrlRegex = /"(https?:\/\/[^"]+\.(?:jpg|jpeg|png|gif))"/gi;
      let imgMatch;
      while ((imgMatch = imgUrlRegex.exec(html)) !== null) {
        imgUrls.push(imgMatch[1]);
      }
      console.log(`Found ${imgUrls.length} direct image URLs ending in jpg/png/etc.`);
      if (imgUrls.length > 0) {
        console.log("First 5 direct URLs:", imgUrls.slice(0, 5));
      }
    } catch (err) {
      console.error(err);
    }
  }
}

testFetch();
