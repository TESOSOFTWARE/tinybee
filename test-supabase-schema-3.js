require('dotenv').config({ path: '.env.local' });
fetch("https://uzgrmusaxsgirshvkwzx.supabase.co/rest/v1/", {
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  }
}).then(r => r.json()).then(data => {
  console.log(data.paths['/app_content']);
}).catch(console.error);
