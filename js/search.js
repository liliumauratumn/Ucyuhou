// Client-side Search Engine for Ucyuhou Project
(function() {
  const SEARCH_DATABASE = [
  {
    "title": "エイブラハムの「許可する」とは何を許すことなのか",
    "category": "悟り",
    "url": "article-abraham.html",
    "excerpt": "引き寄せにおける「抵抗の放棄」の意味。",
    "body": "強く願うことは、時に欠乏へのフォーカスとなる。宇宙の法則が自然に働くことを「許可する」のは、エゴのコントロールを手放した状態である。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "在ることが許されている状態",
    "category": "悟り",
    "url": "article-allowed.html",
    "excerpt": "努力を必要としない自己の発見。",
    "body": "何者かになる必要はない。ただ呼吸し、存在していること自体が、宇宙から完全に許容され、支えられている。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "ブッダの「無我」と現代における自己同一化の解除",
    "category": "悟り",
    "url": "article-anatta.html",
    "excerpt": "実体なき私の観察。",
    "body": "私という固定された実体はどこにも存在しない。心身の絶え間ない変化を観察するとき、自我はプロセスに過ぎないことが見抜かれる。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "ブッダの苦と引き寄せの抵抗はどこでつながるか",
    "category": "悟り",
    "url": "article-buddha.html",
    "excerpt": "東洋哲学と現代スピリチュアリティの交差点。",
    "body": "ブッダが説いた「渇愛」とエイブラハムが説く「抵抗」。形は違えど、どちらも「いまここにあるがままの現実」への拒絶を問題としている。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "ホ・オポノポノの真意、ハワイ伝統と現代解釈の溝を読む",
    "category": "悟り",
    "url": "article-bunsho.html",
    "excerpt": "4つの言葉（ありがとう、ごめんなさい、許してください、愛しています）の反復が、なぜ潜在意識の「クリーニング」を引き起こすのか。伝統的なポノと現代のクリーニングの対比。",
    "body": "ホ ・オポノポノ（Ho'oponopono）は、ハワイに古くから伝わる「問題解決」の儀式である。現代ではモルナ・シメオナ女史、そしてヒューレン博士らによって「セルフ・アイデンティティ・スルー・ホ・オポノポノ（SITH）」として再編集され、4つの言葉を心で唱えるだけの単純なクリーニングメソッドとして世界中に普及した。 しかし、伝統的なホ・オポノポノと、現代のクリーニング運動には本質的な構造の差がある。ハワイの古典社会において、ポノポノは「集団の調和」を取り戻すための紛争解決対話のプロセスであった。誤解や罪を言葉にして分かち合い、和解（Pono）する。そこには他者という境界線が存在していた。 すべては記憶の再生である これに対し、現代のSITHは「100%自己の責任」を説く。目の前の人物が引き起こした問題は、その他者の問題ではなく、あなたの潜在意識（ウニヒピリ）に眠る過去の「記憶」の再生である。したがって、修正すべきなのは外界の他者ではなく、自分自身の無意識の記憶である。この極端な内省こそが、逆にエゴによる他者へのジャッジから私たちを救い出す。 外界を修正しようとするのをやめなさい。現実はあなたの記憶の再生そのものである。ただ内側の記憶に『ありがとう、愛しています』と呼びかけ、手放し（クリーニング）なさい。 「4つの言葉」は、エゴが状況をコントロールしようとする悪あがき（抵抗）を一時的に停止させ、無意識のクリーニングスペース（空 / Zero）を形成するためのマントラとして機能する。ハワイの伝統文書に隠されたこの本質を読み解くとき、私たちは引き寄せの「非抵抗の法則」との深い合流を見出すことになる。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "願望と執着の違い",
    "category": "悟り",
    "url": "article-desire.html",
    "excerpt": "欲しいという感情の裏側にあるもの。",
    "body": "純粋な願望には軽やかさがある。執着には「それがなければ私は不幸である」という重い前提が張り付いている。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "欲しいものリストを捨てる",
    "category": "悟り",
    "url": "article-discard.html",
    "excerpt": "リスト化がもたらす欠乏の固定化。",
    "body": "リストを書くことで「私には今これがない」という強烈な確認作業になっていないか。欠乏のリストを燃やし、ただ今日の空の美しさに浸ること。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "エメラルドタブレットを読む前に知るべきこと",
    "category": "悟り",
    "url": "article-emerald-prep.html",
    "excerpt": "古代文書の背景知識。",
    "body": "錬金術のメタファーは、金属の変容ではなく魂の変容を指している。この前提がなければ、タブレットは単なる魔術書にしか見えないだろう。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "エメラルドタブレットの「上なるものと下なるもの」を読む",
    "category": "悟り",
    "url": "article-emerald.html",
    "excerpt": "ヘルメス哲学の核心に迫る。",
    "body": "マクロコスモスとミクロコスモスの照応関係。私たちの内面が整うとき、外側の現実もまた幾何学的な必然性をもって整っていく。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "願うほど遠ざかる理由——引き寄せの「抵抗」を再読する",
    "category": "悟り",
    "url": "article-hikiyose.html",
    "excerpt": "エイブラハムの「許可する」とは何を許すことなのか。執着が引き寄せる「欠乏」の周波数。",
    "body": "引 き寄せの法則（Law of Attraction）における最大の罠は、「強く願うこと」が往々にして「それが手に入っていない現実」を宇宙に放射してしまうことである。エイブラハム・ヒックスが伝えるチャネリング思想の核心は、意志力による現実創造ではなく、純粋な非抵抗状態の実現である。 私たちが「お金が欲しい」「健康になりたい」と強く願うとき、心の中には同時に「現在はお金がなく、不健康である」という強烈な欠乏感がセットで生まれている。宇宙の法則は、頭の思考ではなく、あなたの「波動（State of Being）」と同調する。したがって、欠乏のエネルギーで願うことは、欠乏状態を長引かせる結果となる。 「許可・受容状態（Allowing）」とは何か エイブラハムは、引き寄せの第3のステップとして「許可し、受け入れること（The Art of Allowing）」を挙げる。これは、願望がすでに叶ったかのようにリラックスし、エゴの抵抗を手放した状態である。抵抗とは、疑い、焦り、不安、そして「どうやって叶えるか（How）」への執着である。 願望をロケットのように宇宙に打ち上げたなら、あとはその願望の周波数と同調するだけでよい。あなたがすべきなのは、ただ抵抗の思考（エゴの心配事）をやめ、リラックスしてVortex（波動の貯蔵庫）に滑り込むことである。 「欲しいものリスト」を毎日眺めて執着するのをやめ、今この瞬間の「気分の良さ」を最優先すること。これこそが、非抵抗の極意である。私たちが抵抗を終えたとき、すでに宇宙が用意していた豊かさの流れは、障害物を失って自然と私たちの現実に流れ込んでくる。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "「私は誰か」を問い続けるマハルシの探求",
    "category": "引き寄せ",
    "url": "article-jissen-1.html",
    "excerpt": "エックハルト・トール、ブッダ、非二元の教えに共通する「自己の見誤りの終了」を読む。",
    "body": "ラ マナ・マハルシが提唱した「自己探求（アートマ・ヴィチャーラ）」は、極めてシンプルかつ直接的な実践である。 何かを信じる必要も、複雑な儀式を行う必要もない。ただ、湧き上がるすべての思考の根源を追跡するだけだ。 実践のステップ 1. 思考が湧き上がるのを観察する（例：「明日の仕事が不安だ」）。 2. その思考に対して問う。「この思考は誰に向かって湧き上がったのか？」 3. 答えは常に「私に」である。 4. そこで鋭く問う。「では、その『私』とは誰か？」 この問いによって、外へ向かおうとしていた意識が、内なる根源（真我）へと引き戻される。答えを頭で考えてはならない。「私」という感覚がどこから生じているのか、その源に意識を留め続けること。それが実践のすべてである。",
    "searchKeys": "ひきよせ 引き寄せ hikiyose えいぶらはむ エイブラハム abraham ぼるてっくす vortex ていこう 抵抗"
  },
  {
    "title": "ホ・オポノポノの実践：記憶のクリーニング",
    "category": "引き寄せ",
    "url": "article-jissen-2.html",
    "excerpt": "エックハルト・トール、ブッダ、非二元の教えに共通する「自己の見誤りの終了」を読む。",
    "body": "古 代ハワイの叡智を現代に応用した「セルフアイデンティティ・スルー・ホ・オポノポノ（SITH）」の実践は、すべてを「自分の責任」として引き受けることから始まる。 目の前に現れる他者の怒り、社会の不条理、自身の病気。それらはすべて、潜在意識（ウニヒピリ）に蓄積された「過去の記憶」が再生されているに過ぎない。 4つの言葉 記憶を消去（クリーニング）するために、以下の4つの言葉を心の中で繰り返す。 ごめんなさい 許してください ありがとう 愛しています 感情を込める必要はない。ただ淡々と、自分自身の潜在意識に向かって唱え続ける。記憶がゼロの状態（無）に戻ったとき、そこに神聖なるインスピレーションが降りてくる。",
    "searchKeys": "ひきよせ 引き寄せ hikiyose えいぶらはむ エイブラハム abraham ぼるてっくす vortex ていこう 抵抗"
  },
  {
    "title": "自我の境界線が溶ける瞬間",
    "category": "引き寄せ",
    "url": "article-kakera-1.html",
    "excerpt": "エックハルト・トール、ブッダ、非二元の教えに共通する「自己の見誤りの終了」を読む。",
    "body": "夕 暮れの空を見ていた時、ふと奇妙な感覚に襲われた。 普段なら「私が、空を見ている」という明確な主客の分離がある。しかしその瞬間に限っては、「見ている私」という実体がどこにも見当たらず、ただ「空の色が変化していくという現象」だけがそこに存在していた。 境界線の不在 私たちは皮膚を境界線とし、その内側を「自分」、外側を「世界」だと信じ込んでいる。だが、空気を吸い、吐き、光を網膜で受け取っている物理的な連続性を考えれば、その境界は極めて曖昧だ。 思考が沈黙した数秒間、その境界線は完全に溶け落ちた。世界はただ一つであり、私とはその世界が自らを認識するための「機能」に過ぎなかったのだ。",
    "searchKeys": "ひきよせ 引き寄せ hikiyose えいぶらはむ エイブラハム abraham ぼるてっくす vortex ていこう 抵抗"
  },
  {
    "title": "言葉が現実を切り取る前の世界",
    "category": "引き寄せ",
    "url": "article-kakera-2.html",
    "excerpt": "エックハルト・トール、ブッダ、非二元の教えに共通する「自己の見誤りの終了」を読む。",
    "body": "「木 」というラベルを貼った瞬間、私たちは目の前にある生の現実を見ることをやめ、過去の記憶の中にある「木の概念」を見るようになる。 言葉は極めて便利な道具だが、同時に現実を細切れに切断するナイフでもある。海と空の間に明確な線など引かれていないのに、私たちは「海」と「空」という言葉によって、そこに架空の境界線を引いてしまう。 名付ける前の沈黙 もし、一切の名付けをやめて世界に触れたらどうなるだろうか。目の前にあるのは「コップ」ではなく、ただの冷たい感触と光の反射になる。 言葉が介在する前の世界には、圧倒的な静寂と、名状しがたい豊かさが広がっている。思考の欠片は、その静寂へと還るための道しるべでしかない。",
    "searchKeys": "ひきよせ 引き寄せ hikiyose えいぶらはむ エイブラハム abraham ぼるてっくす vortex ていこう 抵抗"
  },
  {
    "title": "エメラルドタブレット翻訳史——錬金術の最高経典が伝える宇宙の法則",
    "category": "悟り",
    "url": "article-law.html",
    "excerpt": "ヘルメス思想の核心「下にあるものは上にあるもののごとく、上にあるものは下にあるもののごとし」の意味を現代の宇宙論から読み直す。",
    "body": "エ メラルド・タブレット（Emerald Tablet）は、中世の錬金術師たちから現代のオカルティズム、さらにはスピリチュアル思想に至るまで、最高峰の知恵の経典として読み継がれてきた謎のテキストである。ヘルメス・トリスメギストスによって記されたとされるこの短い文書には、宇宙法則のすべてが暗号のように圧縮されている。 テキストの冒頭に現れる「下にあるものは上にあるもののごとく、上にあるものは下にあるもののごとし」という言葉は、ホログラフィック宇宙論の先駆的記述である。ミクロの構造（人間、心）は、マクロの構造（宇宙、現実）と相似形（フラクタル）を成している。これは、現実創造の絶対原則である「同調」の力学を説明している。 フラクタルとしての現実 「現実は内面の鏡である」という表現は安易に使われがちだが、エメラルドタブレットの示す相応の法則（Law of Correspondence）はより精密である。個人の深層心理（無意識）に配置された前提や「抵抗のパターン」は、外側の物理次元に幾何学的に相似する状況として「配置」される。あなたの現実は、あなたの精神の内的な構造の物理的な投影に過ぎない。 ただ一つの大いなる奇跡（現実創造）を成し遂げるために、すべての万物は一つのもの（ワンネス、ソース）から生成された。太陽がその父であり、月がその母であり、風がそれを腹に運び、大地がそれを養う。 錬金術とは、鉛を金に変えることではなく、自我という低次元の鉛を、神聖なソースと同調する高次元の「金」へと変容（トランスミューテーション）させる精神的プロセスである。この宇宙の法則を正しく理解し、内的な変容を遂げたとき、私たちの意図する現実は自然と形を成していく。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "マハルシの静寂——インド覚者が遺した「私は誰か」という自問",
    "category": "悟り",
    "url": "article-maharshi.html",
    "excerpt": "ラマナ・マハルシが指し示した自己探求の道。",
    "body": "「私は誰か」という問いは、答えを見つけるためのものではない。思考をその源泉へと差し向けるための静かなる道具である。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "意識とは「見ている場」のことである",
    "category": "悟り",
    "url": "article-mezame.html",
    "excerpt": "何が意識されているかではない。意識されている内容が生成され、消滅していく「空間」そのものとしての気づきに目覚める。",
    "body": "目 覚め（Awakening）とは、何か特別な悟りの体験を神秘的に追体験することではない。それは意識の焦点が、「意識されている中身（思考、感情、外界）」から、「それらすべてが現れて消えていく背景である意識の空間そのもの」へと完全に移行することである。 私たちは普段、スクリーンに映し出される映像（思考のドラマ）に熱中するあまり、スクリーンという「場」そのものの存在を忘れている。スクリーンの上でどんなに悲惨な殺人事件が起きようとも、スクリーン自体は一滴の血も流れず、少しも傷つくことはない。あなたの純粋な意識もまた、エゴの葛藤や痛みのドラマによって一切汚されることはない。 観察者（ウオッチャー）としての気づき あなたが心の中で「私は不安だ」と感じるとき、その不安を「知っている」意識が背景に存在する。その「知っている意識」自体は、不安ではない。それはただ、静かに不安の発生を観察している。これがエックハルト・トールの言う「観察する臨在（Watching Presence）」である。 あなたは、あなたの思考ではない。あなたは、思考が通り過ぎていく背後の、静寂なる広大な空（スペース）である。その空に気づいたとき、あなたは夢から覚め、目覚めが完成する。 気づきそのものにはエゴのような境界線はない。そこには過去の記憶も、未来の心配も入り込む余地がない。思考のフイルターを通さずに、ただ「今ここにあること」をそのまま知覚するとき、私たちは分離された個人という眠りから覚め、宇宙という大いなる背景そのものとして目覚めることになる。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "現実は内面の鏡ではなく、内面の配置である",
    "category": "悟り",
    "url": "article-mirror.html",
    "excerpt": "フラクタル構造としての人生。",
    "body": "鏡という比喩以上に、現実はあなたの内面の論理的帰結として「配置」される。内側で争いが終われば、外側の戦場もまた自然消滅する。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "思考はなぜ現実を狭くするのか",
    "category": "悟り",
    "url": "article-narrow.html",
    "excerpt": "言葉と概念が作り出す世界の限界。",
    "body": "私たちは世界そのものではなく、世界について自分が語っている「説明」を生きている。思考が止まるとき、世界は元の広大さを取り戻す。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "抵抗の不在が引き寄せの正体である",
    "category": "悟り",
    "url": "article-no-resistance.html",
    "excerpt": "力みを手放す技術。",
    "body": "引き寄せとは「力で引く」ことではない。ブロックしていた障害物（疑いや焦り）がなくなったとき、川の水が自然に流れ込む現象である。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "量子力学と意識の境界、観測者効果は引き寄せを証明するか",
    "category": "悟り",
    "url": "article-quantum.html",
    "excerpt": "物理学の知見とスピリチュアリティの接点を考察する。",
    "body": "私たちが現実を観察するとき、そこには観察者の意識が不可避に介入する。これは素朴な願望実現論ではないが、世界が固い物質ではなく確率の波であることを示唆している。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "悟りとは、特別な境地ではない",
    "category": "引き寄せ",
    "url": "article-satori.html",
    "excerpt": "エックハルト・トール、ブッダ、非二元の教えに共通する「自己の見誤りの終了」を読む。",
    "body": "悟 りとは、知性の限界を超えた未知の体験や、神秘的な法悦の連続ではない。古来より数多くの覚者が指摘してきたように、それはむしろ「思考が作り上げていた自己像（エゴ）の誤解が解けること」であり、非常にシンプルで静かな現実の再発見である。 エックハルト・トールは、その著書や講話の中で「いまここ（The Power of Now）」の重要性を説き続ける。多くの人はこれを「現在という時間を大切にする」という道徳的な意味に誤解する。しかし彼の言う「いま」とは、思考が作り出す時間軸（過去と未来）の完全な外部を指す。思考が沈黙したときに残る、純粋な「気づき」そのものである。 思考との同一化を離れる 私たちは普段、頭の中で鳴り響く思考の声を「自分自身」だと誤解している。「私は悲しい」「私は成功しなければならない」といった思考は、条件づけられた脳の電気信号に過ぎない。ブッダの「無我（アナッタ）」の教えは、この思考ストリームの中に永続的な主体（魂や自己）は存在しないことを喝破した。 「思考を観察する者」になりなさい。あなたの頭の中の声と、それを聞いているあなた自身との間に、ほんのわずかな隙間を作りなさい。その隙間こそが、静寂であり、大いなる意識の入り口である。 思考との同一化が解けたとき、葛藤や不安（ブッダの言う「苦」）は自然と消滅する。なぜなら、「苦」を感じていた主体であるエゴそのものが、実体のない思考の束に過ぎないと見抜かれるからである。悟りとは、何かを新しく得るプロセスではなく、余計な幻想を削ぎ落としたあとに残る、本来の「在る（Being）」ことへの回帰に他ならない。",
    "searchKeys": "ひきよせ 引き寄せ hikiyose えいぶらはむ エイブラハム abraham ぼるてっくす vortex ていこう 抵抗"
  },
  {
    "title": "感情のスケールを超えた視点",
    "category": "悟り",
    "url": "article-scale.html",
    "excerpt": "良い気分に執着するという逆説。",
    "body": "感情のスケールを上げることに必死になるあまり、今のネガティブな自分を否定しては本末転倒である。すべての感情を許容する広大なスペースに立つ。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "エックハルト・トールの「いまここ」は時間論ではない",
    "category": "悟り",
    "url": "article-tolle.html",
    "excerpt": "時間という幻想からの脱却。",
    "body": "過去も未来も、脳内にしか存在しない記憶と予測である。存在するのは常にこの瞬間、「いま」という深遠な静寂だけである。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  },
  {
    "title": "宇宙通信・創刊号——意識の多次元的な構造と未来への架け橋",
    "category": "宇宙通信・第2号",
    "url": "article-tsushin.html",
    "excerpt": "私たちの思考はどこからやってくるのか。個人的なマインドを超えた「大いなる源泉（ソース）」からの通信ログ。",
    "body": "宇宙からの通信を受信している「あなた」へ。 思考の背景に広がる静寂から、この記述を送信する。 この通信は、通常の論理的な解説や学習のためのテキストではない。日々の瞑想や探求の中で「受信」したひらめき、思考の断片、あるいは精緻な記事になる前の生の直感的なシグナルを、そのままあなたの意識端末へ転送するものである。 創刊号である今回のテーマは、「意識の受信機としての脳」について。 私たちは普段、思考を「自分が頭の中で考えて生み出しているもの」だと信じ切っている。しかし、その思考は本当に『あなた』から発生しているのだろうか？ 思考は生み出すものではなく、受信するもの テレビやラジオが電波を受信して映像や音声を流すように、私たちの脳もまた、大いなる宇宙の意識フィールドから特定の周波数を受信している「端末」に過ぎない。脳自体が思考を作り出しているわけではない。 あなたが「考えている」と感じるとき、実際には、あなたの脳の周波数がその思考のレベルと同調し、電波を受信しているだけに過ぎない。 不安なことばかりを考えてしまうときは、脳のアンテナが「不安」のチャンネル（低周波）に合わさってしまっている。そこでアンテナの方向を無理やり変えようとしたり、抵抗したりするのではなく、ただ「今は不安の電波を受信しているな」と静かに観察するだけでよい。 観察者であるあなたは、電波そのものではない。電波が流れていく背景スペースそのものである。 この通信が、あなたの日常に小さな「静寂」をもたらすアンテナの微調整になれば幸いである。また次のシグナルで会おう。 （これは宇宙から送信された記述のウェブアーカイブである）",
    "searchKeys": ""
  },
  {
    "title": "エイブラハムの Vortex は「私の消滅」に近い",
    "category": "悟り",
    "url": "article-vortex.html",
    "excerpt": "高波動の領域へのアプローチ。",
    "body": "ボルテックスの中では、問題に執着する個人的なエゴは力を失っている。そこには深い感謝と、大きな全体性への降伏がある。",
    "searchKeys": "いしき さとり satori えご ego ちんもく 沈黙 観察者 かんさつしゃ むが 無我 ぶっだ buddha"
  }
];

  // Dynamically inject styles for the search modal
  const isThemeInverted = document.body.classList.contains('theme-inverted');
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    #search-modal {
      --search-bg: ${isThemeInverted ? '#000000' : '#ffffff'};
      --search-border: ${isThemeInverted ? '#ffffff' : '#000000'};
      --search-text: ${isThemeInverted ? '#ffffff' : '#000000'};
      --search-input-bg: ${isThemeInverted ? '#000000' : '#ffffff'};
      --search-item-hover: ${isThemeInverted ? '#111111' : '#f9f9f9'};
      --search-muted: ${isThemeInverted ? '#cccccc' : '#555555'};
    }
    .search-result-item {
      display: block;
      padding: 1.2rem;
      border: 1px solid var(--search-border);
      background: var(--search-bg);
      color: var(--search-text) !important;
      text-decoration: none;
      transition: background var(--transition-fast, 0.2s), transform var(--transition-fast, 0.2s);
      border-radius: 0 !important;
      outline: none;
      backface-visibility: hidden;
      transform-style: preserve-3d;
      will-change: transform;
    }
    .search-result-item:hover, .search-result-item:focus {
      background: var(--search-item-hover);
      transform: translateY(-2px);
    }
    .search-result-item h4 {
      margin: 0 0 0.4rem 0;
      font-size: var(--fs-base, 1.1rem);
      font-family: var(--font-sans, sans-serif);
      color: var(--search-text) !important;
      font-weight: var(--fw-bold, 700);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .search-result-item p {
      margin: 0;
      font-size: var(--fs-xs, 0.9rem) !important;
      font-family: var(--font-sans, sans-serif) !important;
      color: var(--search-muted) !important;
      line-height: var(--lh-relaxed, 1.6);
      letter-spacing: 0.03em;
    }
    .search-result-category {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: bold;
      padding: 0.2em 0.6em;
      background: var(--search-text);
      color: var(--search-bg);
      border-radius: 0 !important;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .search-modal-open {
      overflow: hidden;
    }
  `;
  document.head.appendChild(styleEl);

  // Dynamically create and append search modal elements
  const modalContainer = document.createElement('div');
  modalContainer.id = 'search-modal';
  modalContainer.style.cssText = `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  `;

  modalContainer.innerHTML = `
    <div style="width: 90%; max-width: 600px; background: var(--search-bg); border: 1px solid var(--search-border); padding: 2rem; box-shadow: 0 10px 40px rgba(0,0,0,0.3); transform: scale(0.95) translateZ(0); transition: transform 0.3s ease; backface-visibility: hidden; transform-style: preserve-3d; will-change: transform, opacity; border-radius: 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="font-family: var(--font-sans); font-size: var(--fs-md, 1.25rem); font-weight: var(--fw-bold, 700); margin: 0; color: var(--search-text); letter-spacing: var(--ls-wide);">記事検索</h3>
        <button id="search-modal-close" aria-label="閉じる" style="border: none; background: none; font-size: var(--fs-lg, 1.5rem); cursor: pointer; color: var(--search-text); padding: 0.5rem; display: flex; align-items: center; justify-content: center; min-width: 44px; min-height: 44px; transition: opacity 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <input type="text" id="search-modal-input" placeholder="キーワードを入力..." style="width: 100%; border: 1px solid var(--search-border); padding: 0.8rem 1.2rem; font-family: var(--font-sans); font-size: var(--fs-base, 1rem); outline: none; border-radius: 0; background: var(--search-input-bg); color: var(--search-text); margin-bottom: 1.5rem; font-weight: var(--fw-medium, 500);" autocomplete="off">
      <div id="search-modal-results" style="max-height: 350px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.75rem; -webkit-overflow-scrolling: touch;">
        <!-- Results populated dynamically -->
      </div>
    </div>
  `;

  document.body.appendChild(modalContainer);

  const modalInput = modalContainer.querySelector('#search-modal-input');
  const modalResults = modalContainer.querySelector('#search-modal-results');
  const closeBtn = modalContainer.querySelector('#search-modal-close');

  function openSearch() {
    document.body.classList.add('search-modal-open');
    modalContainer.style.display = 'flex';
    // Trigger layout before animating
    void modalContainer.offsetWidth;
    modalContainer.style.opacity = '1';
    modalContainer.style.pointerEvents = 'auto';
    modalContainer.querySelector('div').style.transform = 'scale(1) translateZ(0)';
    modalInput.value = '';
    renderResults('');
    setTimeout(() => modalInput.focus(), 100);
  }

  function closeSearch() {
    document.body.classList.remove('search-modal-open');
    modalContainer.style.opacity = '0';
    modalContainer.style.pointerEvents = 'none';
    modalContainer.querySelector('div').style.transform = 'scale(0.95) translateZ(0)';
    setTimeout(() => {
      modalContainer.style.display = 'none';
    }, 300);
  }

  function normalizeText(text) {
    if (!text) return '';
    return text.toLowerCase()
      .replace(/[・\s「」『』、。\-—–]/g, ''); // strip middle dots, spaces, Japanese quotes, punctuation, hyphens
  }

  function renderResults(query) {
    const cleanQuery = normalizeText(query);

    modalResults.innerHTML = '';

    const filtered = SEARCH_DATABASE.filter(item => {
      if (!cleanQuery) return true; // Show all by default when empty
      return normalizeText(item.title).includes(cleanQuery) || 
             normalizeText(item.excerpt).includes(cleanQuery) ||
             normalizeText(item.category).includes(cleanQuery) ||
             (item.searchKeys && normalizeText(item.searchKeys).includes(cleanQuery)) ||
             (item.body && normalizeText(item.body).includes(cleanQuery));
    });

    if (filtered.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.style.cssText = 'text-align: center; padding: 2rem; color: var(--search-muted); font-family: var(--font-sans); font-size: var(--fs-sm);';
      emptyDiv.textContent = '一致する記事が見つかりません。';
      modalResults.appendChild(emptyDiv);
      return;
    }

    filtered.forEach(item => {
      const itemEl = document.createElement('a');
      itemEl.href = item.url;
      itemEl.className = 'search-result-item';
      
      const h4 = document.createElement('h4');
      const span = document.createElement('span');
      span.className = 'search-result-category';
      span.textContent = item.category;
      h4.appendChild(span);
      h4.appendChild(document.createTextNode(item.title));
      
      const p = document.createElement('p');
      p.textContent = item.excerpt;
      
      itemEl.appendChild(h4);
      itemEl.appendChild(p);
      
      modalResults.appendChild(itemEl);
    });
  }

  // Bind Open triggers
  document.addEventListener('click', function(e) {
    const searchBtn = e.target.closest('.header-search-btn');
    if (searchBtn) {
      e.preventDefault();
      openSearch();
    }
  });

  // Bind Close triggers
  closeBtn.addEventListener('click', closeSearch);
  modalContainer.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
      closeSearch();
    }
  });

  // Input Search events
  modalInput.addEventListener('input', function(e) {
    renderResults(e.target.value);
  });

  // Keybindings (Escape to close)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalContainer.style.display === 'flex') {
      closeSearch();
    }
  });
})();
