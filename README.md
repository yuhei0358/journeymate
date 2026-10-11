# JourneyMate

福岡・九州を中心に、訪日外国人の旅行を支援するJourneyMateのWebサイトと運用資料。

## まず読む

- [Instagram戦略・投稿管理](docs/instagram/README.md)
- [共同編集の手順](docs/collaboration.md)
- [会社・サイト設計のヒアリング](docs/hearing-journeymate.md)
- [別のHP実装: journeymate-hp](https://github.com/yuhei0358/journeymate-hp)

## フォルダ

| パス | 内容 |
| --- | --- |
| app/ | Next.jsの画面・ルート |
| components/ | UI部品 |
| lib/ | 共通処理 |
| public/ | Webサイト用静的素材 |
| docs/ | 設計・運用・共同作業の資料 |

## 開発

```sh
git clone https://github.com/yuhei0358/journeymate.git
cd journeymate
npm ci
npm run dev
```

`http://localhost:3000` で表示。ビルドは `npm run build`、静的検査は `npm run lint`。現在の依存はNext.js 16.2.7、React 19.2.4。コード変更の前にAGENTS.mdを読む。

## 運用

Instagramの目的は、日本でYuheiが行う訪日外国人向けツアーへの集客。戦略の正本は `docs/instagram/strategy.md`、予約の記録は `publishing-plan.json`。GitHub上の変更と実際のSNS操作は別々に記録する。

元の写真・動画、デザイン原本はリポジトリ外で保管。秘密の設定、パスワード、APIキーはコミットしない。
