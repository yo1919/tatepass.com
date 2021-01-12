<template>
  <div class="container">
    <header_edit />
    <!--アプリ開発ページ-->
    <main class="main main-webdesignpage">
      <div class="page__top__title page__top__title__app__index">
        <h1>アプリ開発／WEBシステム開発</h1>
      </div>
      <section class="main__container main__container__service__index">
        <ul class="pankuzu-list">
          <li><a href="/">トップページ</a></li>
          <li><a href="/service">事業内容</a></li>
          <li>アプリ開発／WEBシステム開発</li>
        </ul>
        <div class="service__index__box">
          <img class="service__info__img_a" src="/service__app__app.jpg" alt="スマホアプリ開発">
          <div class="service__index__box__infowrapper">
            <h2>スマホアプリ開発</h2>
            <p>
              店舗会員様向けのアプリを中心にiOSとAndroidどちらにも対応したアプリ開発の実績があります。<br>
              目的や予算に合わせて最適なご提案をさせていただきます。<br>
              助成金を活用したスマホアプリ開発についてもお気軽にご相談ください。
            </p>
            <!--a class="button" href="/service/dna/dnaxy">
              詳しく見る
              <div class="button__horizontal"></div>
              <div class="button__vertical"></div>
            </a-->
          </div>
        </div><!--/service__index__box-->
        <div class="service__index__box service__index__box__rowrevere">
          <img class="service__info__img_a" src="/service__app__CRM.jpg" alt="顧客管理システム">
          <div class="service__index__box__infowrapper">
            <h2>顧客管理システム</h2>
            <p>
              顧客管理システムは当社が最も得意とするシステム開発です。<br>
              当社の店舗専用DNA検査「dNAXY（ナクシー）」で導入店舗様向けの顧客管理システムは当社が独自に開発しております。<br>
              助成金を活用したシステム開発についてもお気軽にご相談ください。
            </p>
            <!--a class="button" href="/service/dna/dnaxy">
              詳しく見る
              <div class="button__horizontal"></div>
              <div class="button__vertical"></div>
            </a-->
          </div>
        </div><!--/service__index__box-->
        <div class="service__index__box">
          <img class="service__info__img_a" src="/service__app__IOT.jpg" alt="IoTシステム構築">
          <div class="service__index__box__infowrapper">
            <h2>IoTシステム構築</h2>
            <p>
              総務省の「令和元年版 情報通信白書」によると、IoTデバイスは急速に増加しており、2021年には全世界で447.9億台に達すると予測されているように、IoTシステムはこれからどんどん伸びていく分野です。<br>
              IoTのシステム開発に興味はあるけど良く分からないという方はまずはお気軽にお問い合わせください。<br>
              また、助成金を活用したシステム開発についてもお気軽にご相談ください。
            </p>
            <!--a class="button" href="/service/dna/dnaxy">
              詳しく見る
              <div class="button__horizontal"></div>
              <div class="button__vertical"></div>
            </a-->
          </div>
        </div><!--/service__index__box-->
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
      title: '事業内容 -「アプリ開発／WEBシステム開発」| 株式会社tatepass',
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

.page__top__title__app__index{
  background-image: url("/page__top__title__bg__app.png");
  color: #FFF;
}

/*media Queries 768
----------------------------------------------------*/

@media screen and (min-width: 768px) {

  

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
