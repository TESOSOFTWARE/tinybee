require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

async function check() {
  const { data, error } = await supabase.from('app_content').select('*');
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data rows:', data.length);
    data.forEach(row => {
      console.log(`- ${row.key}:`, JSON.stringify(row.data).slice(0, 100));
    });
  }
}

check();
