# tatepass.com
Corporate site

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

``` bash
# レンタルサーバーにデプロイするファイルを生成
$ npm run generate
```
/dist配下のファイルをアップロードする  

## コントリビューション
> いわゆる Fork And Pull ワークフローで行います。

1. tatepass/tatepass.com (以下upstream) をフォーク
1. フォークしたリポジトリ(以下origin) をローカルにクローン
1. originとローカルで作業
  - ~ブランチをきちんと切ること~ （いまはしなくてOK）
  - 作業中、こまめに最新のupstreamを取り込むこと
1. 作業が終わったらコミットしてoriginにプッシュ
1. originが最新のupstreamを取り込んでいることを確認
1. upstreamに対してプルリクエストを発行する
