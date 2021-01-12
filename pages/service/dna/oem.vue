<template>
  <div class="container">
    <header_edit />
    <!--DNA検査ページ-->
    <main class="main main-dnapage">
      <div class="page__top__title page__top__title__dna__index">
        <h1>DNA検査について</h1>
      </div>
      <section class="main__container main__container__dna__index">
        <div class="dna__index__box">
          <a href="#" class="service__dna__info__img_a">
            <img class="img__service__dnaxylogo" src="/dNAXY_icon_yoko.jpg" alt="dNAXY（ナクシー）">
          </a>
          <h2>店舗専用ダイエット遺伝子検査</h2>
          <p>
            dNAXY（ナクシー）は店舗専用に開発したダイエットDNA検査です。<br>
            主にエステサロン様やパーソナルジム様など、美容やフィットネスの店舗ビジネスを運営されている方々に導入していただいております。細かなアップデートによる圧倒的なコンテンツの結果レポートと、使いやすく設計されたWEBシステムでお客様をサポート致します。
          </p>
          <a class="button" href="#">
            dNAXYについて詳しく見る
            <div class="button__horizontal"></div>
            <div class="button__vertical"></div>
          </a>
        </div>
        <div class="dna__index__box">
          <a href="#" class="service__dna__info__img_a">
            <img src="/service__dna__oem__icon.jpg" alt="DNA検査 OEM開発">
          </a>
          <h2>オリジナルDNA検査の開発（OEM開発）</h2>
          <p>
            検査項目や結果レポートの内容からパッケージデザインなど、全てオリジナルのDNA検査を開発することが可能です。<br>
            遺伝子に関する知識がなくてもご安心ください。解析する遺伝子の選定から結果レポート内容の監修、アップセルやクロスセルの提案まで幅広くサポートさせていただきます。
          </p>
          <a class="button" href="#">
            OEM開発について詳しく見る
            <div class="button__horizontal"></div>
            <div class="button__vertical"></div>
          </a>
        </div>
      </section>
    </main>
    <!--メインコンテンツここまで-->
    <footer_edit />
  </div>
</template>

<script>
import header_edit from '~/components/header.vue'
import footer_edit from '~/components/footer.vue'
import contact from '~/components/contact-form.vue';
export default {
  components: {
    header_edit
    , footer_edit
    , contact
  }
  , head() {
    return {
      title: '「DNA検査」| 株式会社tatepass',
      meta: [
      { hid: 'description', name: 'description', content: 'テスト' }
      ]
    }
  }
  , methods: {
    // お問い合わせフォームがsubmitされた時
    onFormSubmit() {
      this.$router.push('/thanks');
    }
  }
}
</script>

<style>
.main__container__dna__index{
  width: 100%;
  margin: 3em auto 5em;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
  .dna__index__box{
    width: 87.5%;
    margin: 0 auto 6em;
  }
    .service__dna__info__img_a{
      width: 100%;
      display: block;
      margin: 0 auto 1.5em
    }
      .dna__index__box img{
        width: 100%;
        height: auto;
      }
      .dna__index__box .img__service__dnaxylogo{
        border: 0.5px solid #f0f0f0;
      }
    .dna__index__box h2{
      text-align: center;
      font-size: 18px;
      margin: 0 0 1.75em;
      font-weight: 900;
    }
      .dna__index__box h2::after{
        display: block;
        width: 20%;
        margin: 0 auto;
        content: "";
        border-bottom: 1px solid #333;
        padding: 1em 0 0;
      }
    .dna__index__box p{
      width: 100%;
      margin: 0 auto 3em;
    }


/*media Queries 768
----------------------------------------------------*/

@media screen and (min-width: 768px) {

  .dna__index__box{
    width: 40%;
  }

}


/*media Queries 960
----------------------------------------------------*/

@media screen and (min-width: 960px) {

  

}


/*media Queries 1280
----------------------------------------------------*/

@media screen and (min-width: 1280px) {

}
</style>
