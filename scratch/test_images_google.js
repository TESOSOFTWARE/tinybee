async function test() {
  const url = 'https://images.google.com/images?q=clothespin';
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
      }
    });
    console.log("Status:", res.status);
    const html = await res.text();
    console.log("Length:", html.length);
    console.log("Consent/Redirect in HTML?", html.toLowerCase().includes('consent') || html.toLowerCase().includes('redirect'));
    
    // Check if there are image sources
    const imgUrls = [];
    const regex = /https:\/\/encrypted-tbn[0-9]\.gstatic\.com\/images\?q=[^"\s'\\&]+/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      imgUrls.push(match[0]);
    }
    console.log("Found gstatic URLs:", imgUrls.length);
    if (imgUrls.length > 0) {
      console.log("First 3:", imgUrls.slice(0, 3));
    }
  } catch (e) {
    console.error(e);
  }
}
test();
