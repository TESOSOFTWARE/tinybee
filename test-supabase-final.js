require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

async function check() {
  const { data, error } = await supabase.from('app_content').select('*');
  if (error) console.error("Error reading:", error);
  else {
    console.log("Rows count:", data.length);
    data.forEach(r => console.log(r.key, JSON.stringify(r.data).substring(0, 50)));
  }
}
check();
