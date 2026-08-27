const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://uzgrmusaxsgirshvkwzx.supabase.co', 'placeholder-key');

async function check() {
  const { data, error } = await supabase.from('app_content').select('data').eq('key', 'hidden_grade_ids').single();
  console.log("Error:", error);
}
check();
