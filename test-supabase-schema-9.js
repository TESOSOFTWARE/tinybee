require('dotenv').config({ path: '.env.local' });
fetch("https://uzgrmusaxsgirshvkwzx.supabase.co/rest/v1/app_content?select=id,created_at", {
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  }
}).then(async r => console.log(r.status, await r.text())).catch(console.error);
