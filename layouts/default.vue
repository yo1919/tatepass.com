<template>
  <div class="test">
    <nuxt />
  </div>
</template>

<!--resetcssここから-->
<style>
/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
</style>
<!--resetcssここまで-->


<!--共通CSSここから-->
<style>
/* tatepass color: #86bd42, rgba(134,189,66) */
html{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family: "Hiragino Sans", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "sans-serif";
  color: #333;
  font-size: 15px;
  line-height: 1.8;
  word-break: break-all;
}

img{
  display: block;
}

.sp-only-br{
  display: block;
}

.container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main{
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 65px 0 0;
}
.main__container{
  width: 100%;
  margin: 1em auto;
}

.page__top__title{
  text-align: center;
  background-size: cover;
  padding: 1em;
  font-size: 24px;
}

.pankuzu-list{
  width: 95%;
  margin: 0 auto 5em;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 10px;
}
  .pankuzu-list li:not(:last-child)::after{
    content: ">";
    padding: 0 .5em;
  }
  .pankuzu-list li a{
    color: #86bd42;
    text-decoration:none;
    border-bottom:1px solid rgba(134,189,66,1);
    transition : all 0.5s;
  }
    .pankuzu-list li a:hover{
      border-bottom:1px solid rgba(134,189,66,0);
    }


/*リンクボタン*/
.button {
  --offset: 10px;
  --border-size: 2px;
  display: block;
  position: relative;
  padding: 1.5em 3em;
  appearance: none;
  border: 0;
  background: transparent;
  color: #86bd42;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  border-radius: 0;
  box-shadow: inset 0 0 0 var(--border-size) currentcolor;
  transition: all 0.8s ease;
  width: 50%;
  margin: auto auto 0;
  text-align: center;
  text-decoration:none;
  font-size: 12px;
}
.button:hover {
  background: rgba(134, 189, 66, 1);
  color: #ffffff;
}
.button__horizontal, .button__vertical {
  position: absolute;
  top: var(--horizontal-offset, 0);
  right: var(--vertical-offset, 0);
  bottom: var(--horizontal-offset, 0);
  left: var(--vertical-offset, 0);
  transition: transform 0.8s ease;
  will-change: transform;
}
.button__horizontal::before, .button__vertical::before {
  content: "";
  position: absolute;
  border: inherit;
}
.button__horizontal {
  --vertical-offset: calc(var(--offset) * -1);
  border-top: var(--border-size) solid currentcolor;
  border-bottom: var(--border-size) solid currentcolor;
}
.button__horizontal::before {
  top: calc(var(--vertical-offset) - var(--border-size));
  bottom: calc(var(--vertical-offset) - var(--border-size));
  left: calc(var(--vertical-offset) * -1);
  right: calc(var(--vertical-offset) * -1);
}
.button:hover .button__horizontal {
  transform: scaleX(0);
}
.button__vertical {
  --horizontal-offset: calc(var(--offset) * -1);
  border-left: var(--border-size) solid currentcolor;
  border-right: var(--border-size) solid currentcolor;
}
.button__vertical::before {
  top: calc(var(--horizontal-offset) * -1);
  bottom: calc(var(--horizontal-offset) * -1);
  left: calc(var(--horizontal-offset) - var(--border-size));
  right: calc(var(--horizontal-offset) - var(--border-size));
}
.button:hover .button__vertical {
  transform: scaleY(0);
}
/**/

/*serviceページ*/
.main__container__service__index{
  width: 100%;
  margin: .5em auto 2em;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
  .service__index__box{
    width: 87.5%;
    margin: 0 auto 6em;
    display: flex;
    flex-direction: column;
  }
    .service__info__img_a{
      width: 100%;
      display: block;
      margin: 0 auto 1.5em
    }
      /*
      .service__index__box img{
        width: 100%;
        height: auto;
      }
      */
      .service__index__box .img__service__dnaxylogo{
        border: 0.5px solid #f0f0f0;
      }
    .service__index__box__infowrapper{
      width: 100%;
      margin: 0;
    }
      .service__index__box h2{
        text-align: center;
        font-size: 18px;
        margin: 0 0 1.75em;
        font-weight: bold;
      }
        .service__index__box h2::after{
          display: block;
          width: 20%;
          margin: 0 auto;
          content: "";
          border-bottom: 1px solid #333;
          padding: 1em 0 0;
        }
      .service__index__box p{
        width: 100%;
        margin: 0 auto 3em;
      }

/*media Queries 768
----------------------------------------------------*/

@media screen and (min-width: 768px) {

  .page__top__title{
    padding: 2em;
    font-size: 36px;
  }

  .service__index__box{
    width: 92.5%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
  .service__index__box__rowrevere{
    flex-direction: row-reverse;
  }
    .service__info__img_a{
      width: 45%;
      margin: 0 0 1.5em;
    }
    .service__index__box__infowrapper{
      width: 45%;
    }

}


/*お問い合わせフォーム*/
.main__container__contact{
  width: 92.5%;
  max-width: 750px;
  margin: 2em auto 5em;
}
.main__container__contact-discp{
  font-size: 12px;
  margin: 1.5em auto;
  text-align: left;
  line-height: 2.5;
}
form{
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
}
.main__container__wrapper__contactform{
  width: 100%;
  margin: 2em auto 5em;
}
  .question-wrapper{
    margin: 0 auto 1.5em;
  }
    .question-wrapper p{
      margin: 0 auto .75em;
      font-size: 13px;
    }
      .question-wrapper p span.hissu{
        display: inline-block;
        font-size: 10px;
        padding: .25em .5em;
        background: #ff6666;
        border-radius: 5px;
        color: #FFF;
        margin: 0 .75em 0 0;
      }
      .question-wrapper p span.nini{
        display: inline-block;
        font-size: 10px;
        padding: .25em .5em;
        background: #6699ff;
        border-radius: 5px;
        color: #FFF;
        margin: 0 .75em 0 0;
      }
    .question-wrapper input{
      width: 95%;
      max-width: 450px;
      padding: 1em;
      border: 1px solid #CCC;
    }

    .question-wrapper .name-wrapper{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 95%;
      max-width: 450px;
    }
      .question-wrapper .name-wrapper .name-wrapper-inner{
        width: 45%;
      }
        .question-wrapper .name-wrapper .name-wrapper-inner input{
          width: 100%;
          border: 1px solid #CCC;
        }

    select {
      /* styling */
      background-color: white;
      border: thin solid #CCC;
      border-radius: 2px;
      display: inline-block;
      font: inherit;
      line-height: 1.5em;
      padding: 0.5em 3.5em 0.5em 1em;
      /* reset */
      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    select.minimal {
      background-image:
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
      background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
      background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
      background-repeat: no-repeat;
      width: 100%;
      max-width: 475px;
    }

    select.minimal:focus {
      background-image:
      linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
      background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
      background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
      background-repeat: no-repeat;
      border-color: #6699ff;
      outline: 0;
    }


    .contacy-label-wrapper{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .question-wrapper .check-label{
      cursor: pointer;
      width: 100%;
      margin: 0 auto .75em;
    }
      .question-wrapper .check-label input{
        width: auto;
        font-size: 3em;
      }

    .question-wrapper textarea{
      width: 100%;
      max-width: 475px;
      height: 150px;
      border-color: #CCC;
    }

    .submit{
      border-style: none;
      background: #666;
      padding: 1em;
      color: #FFF;
      width: 20%;
      max-width: 100px;
      margin: 0 auto;
      display: block;
      border-radius: 3px;
      cursor: pointer;
    }



/*media Queries 960
----------------------------------------------------*/

@media screen and (min-width: 960px) {

  .sp-only-br{
    display: none;
  }

  .main{
    padding: 75px 0;
  }

  .pankuzu-list{
    margin: 0 auto 75px;
  }

  .main__container__contact-discp{
    text-align: center;
    font-size: 14px;
    margin: 1.5em auto 2em;
  }

  .service__index__box h2{
    font-size: 21px;
  }

}


/*media Queries 1280
----------------------------------------------------*/

@media screen and (min-width: 1280px) {

}
</style>
<!--共通CSSここまで-->