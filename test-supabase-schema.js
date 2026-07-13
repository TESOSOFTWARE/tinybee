require('dotenv').config({ path: '.env.local' });
fetch("https://uzgrmusaxsgirshvkwzx.supabase.co/rest/v1/app_content?limit=1", {
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  }
}).then(r => r.json()).then(console.log).catch(console.error);
