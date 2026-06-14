const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const BUCKET_NAME = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'vocab-icons';

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const uploadImage = async (filePath, targetFileName) => {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    console.log(`Uploading ${targetFileName}...`);
    
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(targetFileName, fileBuffer, {
        contentType: 'image/png',
        upsert: true
      });
      
    if (error) {
      console.error(`Failed to upload ${targetFileName}:`, error.message);
    } else {
      console.log(`Successfully uploaded ${targetFileName}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
};

const main = async () => {
  const artifactDir = '/Users/annguyen/.gemini/antigravity/brain/c5810777-ae04-43d2-be55-ace8084ea5b3';
  
  const files = [
    { source: 'cutting_1780683456177.png', target: 'cutting.png' },
    { source: 'rolling_1780683467715.png', target: 'rolling.png' },
    { source: 'cutting_board_1780683478801.png', target: 'cutting_board.png' }
  ];

  for (const file of files) {
    const fullPath = path.join(artifactDir, file.source);
    await uploadImage(fullPath, file.target);
  }
  
  console.log("All uploads finished!");
};

main();
