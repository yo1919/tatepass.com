# tatepass.com
コーポレートサイト

## 開発環境

``` bash
# パッケージをインストール
$ npm install

# ローカルでサーバー起動（ホットリロード）
$ npm run dev

# 本番環境用にビルドする
$ npm run build

# ビルドしたものを起動
$ npm run start
```

## デプロイ
1. プルリクエストがマージされると Github Actions で自動的にファイルが生成される  
1. tatepass/tatepass.com の Actions タブをクリック
1. Workfrows の Release をクリック
1. 最新の Release をクリックして詳細へ
1. Artifacts の tatepass_dot_com をダウンロード
1. 解凍したファイル一式をサーバーにアップする
  - サーバーのファイルは一旦綺麗にしとく

## コントリビューション
**いわゆる Fork And Pull ワークフローで行います。**
----

1. tatepass/tatepass.com (以下upstream) をフォーク
1. フォークしたリポジトリ(以下origin) をローカルにクローン
1. originとローカルで作業
  - ブランチをきちんと切ること
  - 作業中、こまめに最新のupstreamを取り込むこと
1. 作業が終わったらコミットしてoriginにプッシュ
1. originが最新のupstreamを取り込んでいることを確認
1. upstreamに対してプルリクエストを発行する

作業の準備：
``` bash
# フォークしたリポジトリ(以下origin) をローカルにクローンする
$ git clone https://..../your_name/tatepass.com.git

# リモートにupstreamを追加する
$ git remote add upstream https://github.com/tatepass/tatepass.com.git
```

作業開始の準備：
``` bash
# 最新をとりこみ
$ git pull origin master
$ git pull upstream master
$ git push origin master

# 作業用のブランチを作成、そこの作業に切り替え
$ git checkout -b ブランチ名 
```

作業が終わったら：
``` bash
# 現状をコミット
$ git add .
$ git commit -m "なんかコメント"
$ git push origin ブランチ名

# originのmasterブランチに最新をとりこむ
$ git checkout master
$ git pull origin master
$ git pull upstream master
$ git push origin master

# 作業ブランチに変更を取り込む
$ git checkout ブランチ名
$ git merge master
$ git push origin ブランチ名
```
=> Githubでプルリクエストを発行する  
  
プルリクエストがマージされたら：
``` bash
# 作業ブランチはもういらないので削除
$ git checkout master
$ git branch -D ブランチ名
```
=> Github上のも削除していい
