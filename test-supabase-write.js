require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

async function check() {
  const { error } = await supabase.from('app_content').upsert({ key: 'test_key', data: { hello: 'world' } }, { onConflict: 'key' });
  if (error) {
    console.error('Error writing:', error);
  } else {
    console.log('Write successful');
  }
}

check();
