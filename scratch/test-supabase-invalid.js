const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://uzgrmusaxsgirshvkwzx.supabase.co', 'placeholder-key');

async function test() {
  console.log('Fetching...');
  const result = await supabase.from('app_content').select('data').eq('key', 'custom_worlds').single();
  console.log('Result:', result);
}
test();
