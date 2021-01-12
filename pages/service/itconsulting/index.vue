<template>
  <div class="container">
    <header_edit />
    <!--IT戦略コンサルティングページ-->
    <main class="main main-webdesignpage">
      <div class="page__top__title page__top__title__itconsulting__index">
        <h1>IT戦略コンサルティング</h1>
      </div>
      <section class="main__container main__container__service__index">
        <ul class="pankuzu-list">
          <li><a href="/">トップページ</a></li>
          <li><a href="/service">事業内容</a></li>
          <li>IT戦略コンサルティング</li>
        </ul>
        <div class="service__index__box">
          <img class="service__info__img_a" src="/service_itconsulting_01.jpg" alt="ITシステム導入コンサルティング">
          <div class="service__index__box__infowrapper">
            <h2>ITシステム導入コンサルティング</h2>
            <p>
              経営とITを結びつける専門家「ITストラテジスト」の有資格者が、ITシステムを導入することで得られる業務効率化やコストダウンの可能性などをご提案させていただきます。<br>
              ITシステムを活用して業務効率化をしたいけど何をしたらいいか分からないという場合はまずはお気軽にご相談ください。
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

.page__top__title__itconsulting__index{
  background-image: url("/page__top__title__bg__itconsulting.png");
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
