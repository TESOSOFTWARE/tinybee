const fs = require('fs');

async function test() {
  const url = 'https://images.google.com/images?q=clothespin';
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    fs.writeFileSync('scratch/google_images_response_2.html', html);
    console.log("HTML preview (first 1000):", html.substring(0, 1000));
  } catch (e) {
    console.error(e);
  }
}
test();
