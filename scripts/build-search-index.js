const fs = require('fs');
const path = require('path');

const workspaceDir = path.join(__dirname, '..');
const searchJsPath = path.join(workspaceDir, 'js', 'search.js');

// 1. Automatically detect article-*.html
const articleFiles = fs.readdirSync(workspaceDir)
  .filter(file => file.startsWith('article-') && file.endsWith('.html'));

const database = [];

articleFiles.forEach(file => {
  const filePath = path.join(workspaceDir, file);
  const html = fs.readFileSync(filePath, 'utf8');

  // 2. Extract Title
  let title = '';
  const titleMatch = html.match(/<h1 class="article-title"[^>]*>([\s\S]*?)<\/h1>/);
  if (titleMatch) {
    title = titleMatch[1].replace(/<[^>]*>/g, '').trim();
  } else {
    const headTitleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
    title = headTitleMatch ? headTitleMatch[1].split('|')[0].trim() : file;
  }

  // 3. Extract Category
  let category = '';
  // Try to find the category span or a link
  const catMatch = html.match(/<span class="article-card__category"[^>]*>([\s\S]*?)<\/span>/) ||
                   html.match(/<span class="article-tag"[^>]*>([\s\S]*?)<\/span>/) ||
                   html.match(/<a[^>]*class="category-tag"[^>]*>([\s\S]*?)<\/a>/);
  if (catMatch) {
    category = catMatch[1].replace(/<[^>]*>/g, '').trim();
  }
  
  // Fallback category detection based on filename if missing
  if (!category) {
    if (file.includes('satori')) category = '悟り';
    else if (file.includes('hikiyose')) category = '引き寄せ';
    else if (file.includes('law')) category = '宇宙の法則';
    else if (file.includes('mezame')) category = '目覚め';
    else if (file.includes('bunsho')) category = '文書';
    else if (file.includes('tsushin')) category = '宇宙通信';
    else category = '未分類';
  }

  // 4. Extract Body Text & Strip Tags (keeping blockquotes)
  let bodyText = '';
  const bodyMatch = html.match(/<div class="article-body[^"]*"[^>]*>([\s\S]*?)<\/div>/);
  if (bodyMatch) {
    bodyText = bodyMatch[1]
      .replace(/<[^>]*>/g, ' ') // replace tags with spaces
      .replace(/\s+/g, ' ') // normalize whitespace
      .trim();
  }

  // 5. Extract Excerpt (first paragraph in body or description meta)
  let excerpt = '';
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  if (descMatch) {
    excerpt = descMatch[1].trim();
  } else if (bodyText) {
    excerpt = bodyText.substring(0, 100) + '...';
  }

  // 6. Generate custom Japanese phonetic keys to bridge Kanji/Kana conversion gap
  let searchKeys = '';
  if (category === '悟り') {
    searchKeys = 'いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha';
  } else if (category === '引き寄せ') {
    searchKeys = 'ひきよせ 引き寄せ hikiyose えいぶらはむ エイブラハム abraham ぼるてっくす vortex ていこう 抵抗';
  } else if (category === '宇宙の法則') {
    searchKeys = 'うちゅうのほうそく 宇宙の法則 law えめらるど エメラルドタブレット emerald tablet へるめす ヘルメス';
  } else if (category === '目覚め') {
    searchKeys = 'めざめ 目覚め mezame めいそう 瞑想 かんさつ 観察 じこ 自己 すくりーん スクリーン';
  } else if (category === '文書') {
    searchKeys = 'ぶんしょ 文書 bunsho ほおぽのぽの ホオポノポノ きおく 記憶 せんざいいしき 潜在意識';
  } else if (category === '宇宙通信') {
    searchKeys = 'うちゅうつうしん 宇宙通信 tsushin じゅしん 受信 のう 脳 げんせん 源泉';
  }

  database.push({
    title,
    category,
    url: file,
    excerpt,
    body: bodyText,
    searchKeys
  });
});

// Overwrite SEARCH_DATABASE inside search.js
if (fs.existsSync(searchJsPath)) {
  let searchJsContent = fs.readFileSync(searchJsPath, 'utf8');

  // Replace SEARCH_DATABASE content
  const dbJson = JSON.stringify(database, null, 2);
  const regex = /(const SEARCH_DATABASE = )\[[\s\S]*?\];/;
  
  if (regex.test(searchJsContent)) {
    searchJsContent = searchJsContent.replace(regex, `$1${dbJson};`);
    fs.writeFileSync(searchJsPath, searchJsContent, 'utf8');
    console.log('Successfully updated search database in search.js');
  } else {
    console.error('Could not find const SEARCH_DATABASE in search.js');
  }
} else {
  console.error(`search.js not found at ${searchJsPath}`);
}
