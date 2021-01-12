<template>
  <div class="container">
    <header_edit />
    <!--アパレルページ-->
    <main class="main main-webdesignpage">
      <div class="page__top__title page__top__title__apparel__index">
        <h1>アパレル</h1>
      </div>
      <section class="main__container main__container__service__index">
        <ul class="pankuzu-list">
          <li><a href="/">トップページ</a></li>
          <li><a href="/service">事業内容</a></li>
          <li>アパレル</li>
        </ul>
        <div class="service__index__box">
          <img class="service__info__img_a" src="/service_apparel_02.jpg" alt="Jack Purcell Snap Apparel">
          <div class="service__index__box__infowrapper">
            <h2>Jack Purcell Snap Apparel</h2>
            <p>
              自社ブランドとしてWEBメディア「Jack Purcell Snap」のアパレルラインを2021A/Wより展開予定です。<br>
            </p>
            <!--a class="button" href="/service/dna/dnaxy">
              詳しく見る
              <div class="button__horizontal"></div>
              <div class="button__vertical"></div>
            </a-->
          </div>
        </div><!--/service__index__box-->
        <div class="service__index__box service__index__box__rowrevere">
          <img class="service__info__img_a" src="/service_apparel_01.jpg" alt="Jack Purcell Snap Apparel">
          <div class="service__index__box__infowrapper">
            <h2>OEM開発</h2>
            <p>
              パターンからデザイン、生地屋さんから縫製工場さんの手配まで、服から小物までアパレル全般のOEM開発の対応が可能です。<br>
              新しくオリジナルブランドでのアパレル事業の展開をお考えの企業様や、顧客様向けのノベルティグッズの開発をお考えの企業様はお気軽にご相談ください。
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
      title: '事業内容 -「WEBメディア運営」| 株式会社tatepass',
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

.page__top__title__apparel__index{
  background-image: url("/page__top__title__bg__apparel.png");
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
