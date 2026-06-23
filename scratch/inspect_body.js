const fs = require('fs');
const html = fs.readFileSync('scratch/google_images_response.html', 'utf8');

// Title check
const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
console.log("Title:", titleMatch ? titleMatch[1] : "None");

// Let's print some of the HTML body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
  console.log("Body preview:", bodyMatch[1].substring(0, 1000));
} else {
  console.log("No body. Full HTML preview:", html.substring(0, 1000));
}
