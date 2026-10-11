# 共同編集の手順

GitHubの招待を受け入れてから、自分のGitHubアカウントで認証する。共同編集権限はpush。リポジトリ管理者権限は変更しない。

```sh
git clone https://github.com/yuhei0358/journeymate.git
cd journeymate
git switch -c docs/update-instagram-strategy
# 必要なファイルを編集する
git add docs/instagram/strategy.md
git commit -m "Update Instagram strategy"
git push -u origin docs/update-instagram-strategy
```

GitHubでPull Requestを開き、変更を確認してmainへ取り込む。作業開始時はmainを `git pull --ff-only` で更新する。未コミット変更がある場合は先に整理し、force pushで他の人の変更を消さない。

資料だけの修正はリンク・内容・投稿日時を確認。コードを変更した場合はプロジェクトの検査・ビルドを実行する。

GitHubで共有するのはコミットしてpushされたコードと資料。PC上の未コミットファイル、認証情報、ローカル自動化、Instagram・WordPressのログイン権限は移らない。GitHub上のメールアドレスではなく招待されたユーザーで認証する。

全プロジェクトの一覧は共有用のリポジトリ目録を参照し、それぞれのREADMEから開始する。
