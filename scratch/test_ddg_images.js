async function getDDGImages(query) {
  try {
    // Step 1: Get the vqd token
    const initUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    const initRes = await fetch(initUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
      }
    });
    const initHtml = await initRes.text();
    
    // Search for vqd in the HTML
    // Pattern: vqd='...' or vqd="..." or vqd=...
    const vqdRegex = /vqd=([#~?=&%0-9a-zA-Z-\._]+)/;
    const vqdMatch = initHtml.match(vqdRegex) || initHtml.match(/vqd\s*=\s*['"]([^'"]+)['"]/);
    
    if (!vqdMatch) {
      console.log("Could not find vqd token in DuckDuckGo HTML");
      return null;
    }
    
    const vqd = vqdMatch[1];
    console.log("Found VQD token:", vqd);
    
    // Step 2: Fetch the images list JSON
    const imagesUrl = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,`;
    const imagesRes = await fetch(imagesUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'Referer': 'https://duckduckgo.com/'
      }
    });
    
    if (!imagesRes.ok) {
      console.log("Failed to fetch DDG images API. Status:", imagesRes.status);
      return null;
    }
    
    const data = await imagesRes.json();
    if (data.results && data.results.length > 0) {
      console.log(`Found ${data.results.length} images from DuckDuckGo!`);
      console.log("First image URL:", data.results[0].image);
      return data.results.map(r => r.image);
    } else {
      console.log("No image results found in DDG response:", data);
      return [];
    }
  } catch (e) {
    console.error("DDG fetch error:", e);
    return null;
  }
}

async function run() {
  await getDDGImages('clothespin');
}
run();
