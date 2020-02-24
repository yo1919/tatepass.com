# PAGES
ここに作成したvueファイルがページになります。  
pages直下のindex.vueが*tatepass.com*になり、その配下に  
```フォルダ名/index.vue``` と作ると そのURLは *tatepass.com/フォルダ名* になります。  
また、直下に```ファイル名.vue``` を作ると、URLは *tatepass.com/ファイル名* となります。  
応用すると……  
```フォルダA/フォルダB/ファイル名C.vue```とファイルを作ると、URLは*tatepass.com/フォルダA/フォルダB/ファイル名* になります。

---- 

# TIPS
*.vueファイルの中身を下記のようにすることで、html, js, css, 各種ファイルを分けることができます。  
``` html
<template src="./index.html"></template>
<script src="./index.js"></script>
<style src="./index.styl" lang="stylus"></style>
```
*.vueファイルを読み込んでページで表示する方法  
（compoents/Logo.vueを読み込む場合）
``` html
<template>
  <!-- 作ったcomponentsをタグで埋め込む -->
  <Logo />
</template>
<scripts>
  // スクリプトの先頭でvueファイルをimportする
  // import { クラス名 } 'パス'; の形式
  import { Logo } from '~/components/Logo.vue';
  export default {
  　// importしたLogoを登録してタグとしてこのページで使えるようにする
    components: [
      Logo
    ]
  }
</scripts>
```
