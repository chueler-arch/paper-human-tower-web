(() => {
  'use strict';
  const translations = {
    'みなさんにチャレンジ頂くのは・・・': 'Your challenge is…',
    'ペーパーヒューマン': 'Paper Human', 'タワー': 'Tower',
    'A4用紙30枚とヒューマンだけ。': 'Just 30 sheets of A4 paper and one Human.',
    '知恵と協力で、いちばん高い自立式タワーをつくろう。': 'Use teamwork and ingenuity to build the tallest freestanding tower.',
    '事前準備をする': 'Workshop setup', 'チャレンジをはじめる': 'Start the challenge',
    'この時間だけは、': 'For this session,', '画面を閉じよう。': 'put your screens away.',
    'ここから終了まで、PC・スマートフォンは使用しません。': 'Do not use PCs or smartphones until the workshop ends.',
    'チーム': 'Team ', '分け': 'Assignment', '自分の名前を確認して、': 'Find your name, then',
    'チームの机に移動してください。': 'move to your team’s table.', '参加者': 'Participants', 'チーム数': 'Number of teams',
    'ランダムにチーム分け': 'Randomly assign teams', '自己紹介と': 'Introduce yourselves and', '役割分担。': 'choose your roles.',
    '〇分以内にチームのメンバーで決めてください': 'Decide together within the allotted time.',
    '設計担当：構造アイデアと全体設計': 'Designer: structural ideas and overall design',
    '組み立て担当：タワーを積み上げる': 'Builder: assemble the tower',
    'サポート担当：紙の加工と土台づくり': 'Support: shape paper and build the base',
    'スタート': 'Start', '備品を': 'Check your', '確認しよう。': 'materials.',
    'すべて揃っているか、チームごとにチェックしてください。': 'Each team should check that every item is ready.',
    'A4用紙': 'A4 paper', '作戦用A4用紙': 'Strategy A4 sheet', 'ヒューマン': 'Human', '計測用メジャー': 'Measuring tape', 'ペン': 'Pen',
    '枚': ' sheets', '体': '', '本': '',
    '使える材料は、': 'The only materials are', '紙だけ。': 'paper and the Human.',
    'A4用紙30枚と指定のヒューマンを使います。のり・テープなどの固定道具は禁止です。': 'Use 30 A4 sheets and the designated Human. Glue, tape, and other fasteners are prohibited.',
    '紙の加工は、': 'Shape the paper', '自由。': 'any way you like.',
    '折る、切る、丸める、差し込む。紙をどう加工しても構いません。': 'Fold, cut, roll, or slot it together. You may shape the paper in any way.',
    '作戦用A4用紙は使わないでください': 'Do not use the strategy A4 sheet.', '折る・切る・丸める': 'FOLD · CUT · ROLL',
    'ヒューマンを、': 'Include the', '組み込む。': 'Human.',
    '人形をタワーのどこかに落ちないよう設置します。最上部でなくても構いません。': 'Place the Human securely somewhere on the tower. It does not have to be at the top.',
    '終了したら、': 'When time is up,', '手を離す。': 'hands off.',
    'タイムアップ後はすぐに作業を止め、タワーから完全に手を離してください。': 'Stop working immediately when time is up and take your hands completely off the tower.',
    'まずは1枚で、': 'Start with one sheet:', '作戦会議。': 'plan your strategy.',
    '使用できる紙は1枚だけ。構造と手順を試し、全員で戦略を決めてください。': 'Use only one sheet to test your structure and process, then agree on a team strategy.',
    '使える材料はA4用紙とヒューマンだけ': 'Use only A4 paper and the Human',
    '紙の加工は自由（作戦用A4用紙は使用不可）': 'Shape paper freely (do not use the strategy sheet)',
    'ヒューマンをタワーに組み込む': 'Include the Human in the tower', '終了したらすぐに手を離す': 'Take your hands off when time is up',
    'それでは、': 'Ready,', '開始！': 'go!', '真剣勝負です。30枚の紙をフルに活用して、安全に高く積み上げよう！': 'Make every one of your 30 sheets count, and build high and safely!',
    'タイムアップで作業終了・手を離す': 'At time up: stop and take your hands off',
    '高さを': 'Measure the', '計測しよう。': 'height.',
    '運営スタッフが、床面からタワーの最高地点までを計測して入力します。': 'Staff will measure from the floor to the tower’s highest point and enter the result.',
    'ヒューマンが一番高い位置なら、ヒューマンの高さまで計測します': 'If the Human is the highest point, measure to the top of the Human.',
    '順位を見る': 'View results', 'おめでとう！': 'Congratulations!',
    'つくった後が、': 'What happens after building', 'いちばん大事。': 'matters most.',
    'チームで振り返り、気づいたことを発表しましょう。': 'Reflect as a team and share what you learned.',
    'なぜ、この順位・高さになった？': 'Why did you achieve this rank and height?', 'どうすれば1位になれた？': 'What could have taken you to first place?',
    '次の挑戦で変えることは？': 'What would you change next time?', '発表。': 'present.',
    '気づいたこと、工夫したこと、次に変えたいことを共有してください。': 'Share what you noticed, what you tried, and what you would change next time.',
    '健闘をたたえて、': 'Celebrate your effort—', '優勝チームに拍手！': 'applause for the winners!',
    'おつかれさまでした！': 'Great work!', '小さくつくって、試して、学ぶ。': 'Build small, test, and learn.',
    '今日の発見を、次のチャレンジへ。': 'Take today’s discoveries into your next challenge.', '最初に戻る ↺': 'Back to start ↺',
    '遊び方・ヘルプ': 'How to play / Help', 'このアプリについて': 'About', '利用規約': 'Terms', 'プライバシーポリシー': 'Privacy',
    '前へ': 'Previous', '次へ': 'Next', '次へ →': 'Next →', '事前準備': 'Workshop setup',
    'ゲームの目的': 'Purpose', 'ルールと進行': 'Rules & flow', '運営メンバー': 'Staff', '会場の準備': 'Venue setup',
    '配布物準備': 'Team kits', '運営からのお願い': 'A request from us', 'チーム・参加者': 'Teams & members', 'ゲームの設定': 'Game settings',
    '限られた材料と時間の中で、チームで試行錯誤しながら、できるだけ高い自立式タワーをつくります。': 'Work as a team with limited materials and time to build the tallest freestanding tower you can.',
    '協働': 'Collaboration', '役割を決め、アイデアを共有しながら一つの成果をつくる。': 'Choose roles, share ideas, and create one result together.',
    '試行錯誤': 'Experimentation', '小さく試し、失敗から学び、制限時間内に改善する。': 'Test small, learn from failure, and improve within the time limit.',
    '振り返り': 'Reflection', '結果だけでなく、チームの進め方と意思決定から学ぶ。': 'Learn not only from the result, but from the team’s process and decisions.',
    'タワー例です。参加者には見せないでください。': 'Example tower — do not show this to participants.', 'サンプル画像を表示する': 'Show example image', 'サンプル画像を非表示にする': 'Hide example image',
    'ルール説明と進行方法': 'Rules and facilitation flow', '導入・チーム分け': 'Introduction & team assignment',
    '目的を伝え、登録したチームで活動を始めます。': 'Explain the objective and begin with the registered teams.',
    '役割分担・備品確認': 'Roles & materials check', '自己紹介後、設計・組み立て・サポートの役割を決めます。': 'After introductions, assign design, building, and support roles.',
    'ルール・作戦会議': 'Rules & strategy', '4つのルールを確認し、1枚の紙で5分間作戦を練ります。': 'Review the four rules and plan for five minutes using one sheet.',
    '制作・作業終了': 'Build & finish', '15分間制作し、タイムアップ後はすぐに手を離します。': 'Build for 15 minutes and take hands off immediately at time up.',
    '計測・振り返り・発表': 'Measure, reflect & present', '運営が高さを記録し、チームで振り返った後に発表します。': 'Staff record heights; teams then reflect and present.',
    '進行役': 'Facilitator', '画面を操作しながら、ルール説明とゲーム全体の進行を担当します。': 'Operate the screen, explain the rules, and facilitate the workshop.',
    'メジャー担当': 'Measurer', '各チームのペーパータワーの高さを計ります。': 'Measure each team’s paper tower.',
    '撮影係': 'Photographer', '記録を残しておくことで、ゲーム後の振り返りに使います。': 'Capture a record to use during the post-game reflection.',
    '各机のチーム名表示': 'Team name signs', 'メジャー': 'Measuring tape', '脚立': 'Step ladder', '撮影用カメラ': 'Camera',
    '大型モニタ または プロジェクター': 'Large monitor or projector', '参加者全員がこのアプリを見られる位置に設置します。': 'Place it where every participant can see this app.',
    '各チームへの配布物準備': 'Prepare each team’s kit', 'チームごとに下記を用意してください。計測用メジャーは運営側で用意します。': 'Prepare the following for each team. Staff provide the measuring tape.',
    'ヒューマンの作成': 'Making the Human', 'ヒューマン　1体 ➡　ヒューマンリング　1個': '1 Human figure ➡ 1 Human ring',
    'チーム数分を作成してください。予備として少し多めに作っておくことをおすすめします。': 'Make one per team. We recommend preparing a few extras.',
    'HumanPrint.pdfをダウンロードし、カラーでA4用紙に印刷する。': 'Download HumanPrint.pdf and print it in color on A4 paper.',
    '無地の部分を切り取る。': 'Cut away the blank section.', '蛇腹状に折る。': 'Accordion-fold the paper.',
    '折りたたんだ状態で、ヒューマンの絵に沿って切り取る。': 'While folded, cut along the Human outline.',
    '左端と右端のヒューマンの手をテープで留め、輪の状態にする。': 'Tape the hands at the left and right ends together to form a ring.',
    '運営からのお願い': 'A request from us', '任意のご支援について': 'Optional support',
    'このアプリが役に立ちましたら、少額でも運営・改善費をご支援いただけるとうれしいです。ご支援は完全に任意で、利用条件ではありません。': 'If this app was useful, we welcome optional contributions toward operation and improvements. Support is entirely optional and is not a condition of use.',
    'SONA STUDIOへメール': 'Email SONA STUDIO', 'でご連絡ください。': ' to contact us.', '活用事例をお寄せください': 'Share your story',
    'ご活用いただいた企業名・団体名と、実施時の写真（公開可能なもの）をぜひお送りください。': 'Please send the name of your organization and any photos you have permission to share.',
    '活用事例をメールで送る': 'Email your story', 'チームと参加者の登録': 'Register teams and participants',
    '1チーム3～5名を基本としてください。': 'We recommend 3–5 people per team.', 'チーム名': 'Team name', '参加者（1行に1名）': 'Participants (one per line)',
    '＋ チームを追加する': '+ Add team', '全参加者を再振り分け': 'Reassign all participants',
    'チーム・参加者ファイル': 'Team & participant file', '設定はブラウザに自動保存されます。CSVにはゲーム設定、チーム名、各チームの参加者が保存されます。': 'Settings are saved in this browser. The CSV includes game settings, team names, and participants.',
    '↓ CSVダウンロード': '↓ Download CSV', '↑ CSVインポート': '↑ Import CSV', '役割分担': 'Role assignment', '制作時間': 'Build time',
    '振り返り': 'Reflection', 'チーム発表': 'Team presentation', '秒': ' sec', '分': ' min', '効果音を初期状態でON': 'Sound on by default',
    '開始前画面を表示': 'Show pre-start screen', '開始前画面の文字': 'Pre-start message', '改行・HTMLタグ使用可': 'Line breaks and HTML allowed',
    '1位の景品': '1st-place prize', '2位の景品': '2nd-place prize', '3位の景品': '3rd-place prize', '未入力': 'Optional',
    '設定ファイル': 'Settings file', '設定はブラウザに自動保存されます。CSVには時間、効果音、開始前画面、景品、チーム名、参加者が保存されます。': 'Settings are saved in this browser. The CSV includes times, sound, pre-start screen, prizes, teams, and participants.',
    '変更内容はこのブラウザに自動保存されます': 'Changes are saved automatically in this browser.', '← 戻る': '← Back', '準備完了': 'Done',
    'タイムアップ！': 'Time’s up!', '作業を止めて、画面を確認してください。': 'Stop working and check the screen.', '確認して閉じる': 'Confirm and close',
    '参加者未登録': 'No participants registered', 'クリックしてチーム名を編集': 'Click to edit team name', 'チーム名を編集': 'Edit team name',
    '優勝チーム': 'Winning team', '景品なし': 'No prize', '一時停止': 'Pause', '再開': 'Resume', '終了へ': 'Finish',
    'CSV設定ファイルをダウンロードしました': 'CSV settings file downloaded.', 'CSV設定ファイルを読み込みました': 'CSV settings file imported.',
    'このCSV設定ファイルは読み込めません': 'This CSV settings file could not be imported.', '時間を分:秒で入力': 'Enter time as minutes:seconds',
    '「分:秒」の形式で入力してください': 'Enter the time in minutes:seconds format.', '参加者数がチーム数より少なくなっています': 'There are fewer participants than teams.',
    '効果音 ON': 'Sound ON', '効果音 OFF': 'Sound OFF', '事前準備を保存しました': 'Workshop setup saved.', '全画面表示を利用できません': 'Fullscreen is not available.',
    '各机のチーム名表示': 'Team name signs on each table',
    'チーム名が分かるよう各机に表示してください。チームごとに独立した机をできるだけ用意してください。複数チームで同じ机をシェアすると、揺らしたなどの問題が起こります。': 'Display each team name clearly. Provide a separate table for each team whenever possible; sharing can cause disputes about bumps or movement.'
  };
  const attrs = { '最初の画面へ':'Go to first screen','進行状況':'Progress','効果音を切り替える':'Toggle sound','効果音':'Sound','全画面表示':'Fullscreen','前へ':'Previous','次へ':'Next','事前準備を閉じる':'Close workshop setup','事前準備メニュー':'Workshop setup menu','サイト情報':'Site information','輪になった紙のヒューマン':'Paper Human ring','完成したペーパーヒューマンタワーの例':'Example completed Paper Human Tower','ヒューマン用紙を蛇腹状に折るイメージ':'Illustration of accordion-folding the Human sheet','みなさんにチャレンジ頂くのは・・・':'Your challenge is…' };
  const originals = new WeakMap();
  const attrOriginals = new WeakMap();
  const requestedLanguage = new URLSearchParams(location.search).get('lang');
  let language = requestedLanguage === 'en' || requestedLanguage === 'ja' ? requestedLanguage : (localStorage.getItem('paperHumanTowerLanguage') === 'en' ? 'en' : 'ja');
  const dynamic = value => {
    if (translations[value]) return translations[value];
    let m;
    if ((m=value.match(/^(\d+)名$/))) return `${m[1]} people`;
    if ((m=value.match(/^(\d+)名・(\d+)チーム$/))) return `${m[1]} people · ${m[2]} teams`;
    if ((m=value.match(/^(\d+)分間の$/))) return `${m[1]} minutes of `;
    if ((m=value.match(/^(\d+)秒で、$/))) return `In ${m[1]} seconds, `;
    if ((m=value.match(/^(.+)の発表$/))) return `${m[1]} presentation`;
    if ((m=value.match(/^(.+)に拍手！$/))) return `Applause for ${m[1]}!`;
    if ((m=value.match(/^(\d+)位 (.+)$/))) return `${m[1]}. ${m[2]}`;
    if ((m=value.match(/^チーム(\d+)$/))) return `Team ${m[1]}`;
    if ((m=value.match(/^(\d+)チームに変更しました$/))) return `Changed to ${m[1]} teams.`;
    if ((m=value.match(/^(\d+)チームに振り分けました$/))) return `Assigned participants to ${m[1]} teams.`;
    if ((m=value.match(/^(\d+)チームに再振り分けました$/))) return `Reassigned participants to ${m[1]} teams.`;
    if ((m=value.match(/^(.+)の高さ$/))) return `Height of ${m[1]}`;
    if ((m=value.match(/^チーム(\d+)の名前$/))) return `Name of Team ${m[1]}`;
    if ((m=value.match(/^(.+)の参加者$/))) return `Participants in ${m[1]}`;
    return value;
  };
  function translateText(node) {
    if (node.parentElement?.closest('[data-i18n-skip],script,style')) return;
    if (!originals.has(node)) originals.set(node, node.nodeValue);
    const source = originals.get(node), trimmed = source.trim();
    if (!trimmed) return;
    const output = language === 'en' ? dynamic(trimmed) : source.trim();
    node.nodeValue = source.replace(trimmed, output);
  }
  function translateElement(el) {
    if (el.closest?.('[data-i18n-skip]')) return;
    if (!attrOriginals.has(el)) attrOriginals.set(el, {});
    const saved = attrOriginals.get(el);
    ['aria-label','title','placeholder','alt'].forEach(name => {
      if (!el.hasAttribute?.(name)) return;
      if (!(name in saved)) saved[name] = el.getAttribute(name);
      el.setAttribute(name, language === 'en' ? (attrs[saved[name]] || translations[saved[name]] || saved[name]) : saved[name]);
    });
  }
  function apply(root=document) {
    if (root.nodeType === Node.TEXT_NODE) translateText(root);
    else {
      if (root.nodeType === Node.ELEMENT_NODE) translateElement(root);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) walker.currentNode.nodeType === Node.TEXT_NODE ? translateText(walker.currentNode) : translateElement(walker.currentNode);
    }
    document.documentElement.lang = language;
    document.title = language === 'en' ? 'Paper Human Tower | Team-Building Workshop App' : 'ペーパーヒューマンタワー｜チームビルディング研修・ワークショップ進行アプリ';
    document.querySelectorAll('[data-lang]').forEach(button => button.classList.toggle('is-active', button.dataset.lang === language));
  }
  window.i18n = { get language(){ return language; }, t: value => language === 'en' ? dynamic(value) : value, apply, setLanguage(value){ language = value === 'en' ? 'en' : 'ja'; localStorage.setItem('paperHumanTowerLanguage', language); apply(); document.dispatchEvent(new CustomEvent('languagechange', {detail:{language}})); } };
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => window.i18n.setLanguage(button.dataset.lang)));
    apply();
    new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => apply(node)))).observe(document.body, {childList:true,subtree:true});
  });
})();
