export interface Category {
  slug: string;
  name: string;
  englishName: string;
  description: string;
  theme: 'default' | 'cosmic';
}

export const categories: Category[] = [
  {
    slug: 'satori',
    name: '悟り',
    englishName: 'Satori',
    description: '自我の正体を見抜き、思考との同一化を離れる。覚者たちが指し示した、到達ではなく発見としての悟りを読む。',
    theme: 'default'
  },
  {
    slug: 'hikiyose',
    name: '引き寄せ',
    englishName: 'Hikiyose',
    description: '願望を抱くことと、執着することは異なる。エイブラハムが遺した「Vortex」と「許可・受容状態（Allowing）」の本質に迫る。',
    theme: 'default'
  },
  {
    slug: 'law',
    name: '宇宙の法則',
    englishName: 'Law',
    description: '現実は物質の偶然の衝突ではない。意識の配列が外界として投影される、多次元の法則構造を紐解く。',
    theme: 'default'
  },
  {
    slug: 'mezame',
    name: '目覚め',
    englishName: 'Mezame',
    description: '意識の焦点が「思考される内容」から「思考を観測する背景」へとシフトすること。それが目覚めである。',
    theme: 'default'
  },
  {
    slug: 'bunsho',
    name: '文書',
    englishName: 'Bunsho',
    description: '古代エジプトの秘教文書からハワイの伝統儀式まで、真理を伝えるテキストを解読・翻訳する。',
    theme: 'default'
  },
  {
    slug: 'jissen',
    name: '実践',
    englishName: 'Practice',
    description: '日常生活の中で教えをどう生かすか。具体的なアプローチと実験。',
    theme: 'default'
  },
  {
    slug: 'kakera',
    name: '思考の欠片',
    englishName: 'Fragments',
    description: '記事になる前の、断片的な思考や直感のメモ。',
    theme: 'default'
  },
  {
    slug: 'tsushin',
    name: '宇宙通信',
    englishName: 'Cosmic Communications',
    description: '私たちは孤立した意識ではない。宇宙から直接送られる非言語的直感の翻訳。\nこれは、思考の背景である「源泉」から送信される、時空を超えた通信ログである。',
    theme: 'cosmic'
  }
];
