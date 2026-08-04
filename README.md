# Paper Human Tower Web

「ペーパーヒューマンタワー」を、ブラウザだけで進行できる静的Webアプリにしたものです。

## 主な機能

- チーム・参加者の登録、ランダム振り分け
- 役割分担、備品、ルールの進行画面
- 5分の作戦、15分の制作タイマー
- チームごとの高さ入力と順位表示
- 振り返り、発表、景品設定
- CSVによる設定の保存・復元
- ブラウザ内への自動保存、全画面表示、終了音

## ローカル確認

```powershell
python -m http.server 8000 --directory public
```

`http://localhost:8000` を開きます。

## Cloudflare Pages

- Framework preset: `None`
- Build command: 空欄
- Build output directory: `public`
- Production branch: `main`

Cloudflare PagesのGitHub連携では `paper-human-tower-web` へのアクセスを許可してください。
