const fs = require('fs');
const path = require('path');

const QUESTS_FILE_PATH = path.join(__dirname, '../src/data/video_quests.ts');
const IMPORTED_JSON_PATH = path.join(__dirname, 'final_imported_quests.json');

function main() {
  if (!fs.existsSync(IMPORTED_JSON_PATH)) {
    console.error('final_imported_quests.json not found!');
    return;
  }

  const finalQuests = JSON.parse(fs.readFileSync(IMPORTED_JSON_PATH, 'utf8'));
  console.log(`Loaded ${Object.keys(finalQuests).length} generated quests.`);

  // We will build a dictionary of all the keys to add to STATIC_VIDEO_QUESTS_DATABASE
  const keysToInsert = {};

  Object.keys(finalQuests).forEach(questKey => {
    const quest = finalQuests[questKey];
    const parts = questKey.split('-');
    const levelId = parseInt(parts[parts.length - 1], 10);
    const topicId = parts.slice(0, parts.length - 1).join('-');
    const grade = quest.grade === 0 ? 'K' : String(quest.grade);

    // 1. Specific key: e.g. "playground-park-1"
    keysToInsert[questKey] = quest;

    // 2. Grade-level key: e.g. "1-1"
    keysToInsert[`${grade}-${levelId}`] = quest;

    // 3. Level 1 shortcuts
    if (levelId === 1) {
      keysToInsert[topicId] = quest;
      // We explicitly skip the grade shortcut keys ('K', '1', '2', '3', '4', '5' etc.)
      // to prevent TypeScript duplicate key compilation errors in the object literal
    }
  });

  console.log(`Expanding to ${Object.keys(keysToInsert).length} database keys...`);

  // Read existing video_quests.ts
  let fileContent = fs.readFileSync(QUESTS_FILE_PATH, 'utf8');

  // We find the insertion point, which is right before:
  // "} as unknown as { [key: string]: VideoQuest };"
  const marker = '} as unknown as { [key: string]: VideoQuest };';
  const insertionIndex = fileContent.indexOf(marker);

  if (insertionIndex === -1) {
    console.error('Could not find STATIC_VIDEO_QUESTS_DATABASE closing marker in video_quests.ts!');
    return;
  }

  // Format the keys to insert as JS code. Note the leading comma to follow the last item.
  let formattedCode = ',\n\n  // ─── BULK IMPORTED PLAYLIST QUESTS ───\n';
  const keys = Object.keys(keysToInsert);
  keys.forEach((key, index) => {
    const data = keysToInsert[key];
    formattedCode += `  "${key}": ${JSON.stringify(data, null, 2).replace(/\n/g, '\n  ')}${index === keys.length - 1 ? '' : ','}\n`;
  });

  // Insert before marker
  const newContent = fileContent.slice(0, insertionIndex) + formattedCode + fileContent.slice(insertionIndex);

  fs.writeFileSync(QUESTS_FILE_PATH, newContent);
  console.log('Successfully merged new quests into src/data/video_quests.ts!');
}

main();
