require('dotenv').config({ path: '.env.local' });
fetch("https://uzgrmusaxsgirshvkwzx.supabase.co/rest/v1/fake_table_does_not_exist", {
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  }
}).then(async r => console.log(r.status, await r.text())).catch(console.error);
