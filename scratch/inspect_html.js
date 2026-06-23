const fs = require('fs');
const html = fs.readFileSync('scratch/google_images_response.html', 'utf8');

console.log("HTML length:", html.length);
console.log("Includes 'captcha'?", html.toLowerCase().includes('captcha'));
console.log("Includes 'robot'?", html.toLowerCase().includes('robot'));
console.log("Includes 'unusual traffic'?", html.toLowerCase().includes('unusual traffic'));
console.log("Includes 'consent'?", html.toLowerCase().includes('consent'));

// Let's print all img tags
const imgTags = [];
const imgTagRegex = /<img[^>]+src="([^"]+)"/gi;
let match;
while ((match = imgTagRegex.exec(html)) !== null) {
  imgTags.push(match[1]);
}
console.log(`Found ${imgTags.length} img tags:`);
imgTags.forEach((t, i) => console.log(`${i}: ${t.substring(0, 100)}`));

// Let's print all scripts
const scripts = [];
const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
let smatch;
while ((smatch = scriptRegex.exec(html)) !== null) {
  scripts.push(smatch[1]);
}
console.log(`Found ${scripts.length} script tags.`);
console.log("First script snippet:", scripts[0]?.substring(0, 100));

// Let's search for "http" or "https" links in scripts
let httpCount = 0;
const httpRegex = /https?:\/\/[^"\s'\\&]+/g;
let hmatch;
const urls = [];
while ((hmatch = httpRegex.exec(html)) !== null) {
  urls.push(hmatch[0]);
}
console.log(`Found ${urls.length} URLs in the HTML.`);
console.log("First 10 URLs:", urls.slice(0, 10));
