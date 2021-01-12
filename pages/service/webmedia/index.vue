<template>
  <div class="container">
    <header_edit />
    <!--WEBメディア運営ページ-->
    <main class="main main-webdesignpage">
      <div class="page__top__title page__top__title__webmedia__index">
        <h1>WEBメディア運営</h1>
      </div>
      <section class="main__container main__container__service__index">
        <ul class="pankuzu-list">
          <li><a href="/">トップページ</a></li>
          <li><a href="/service">事業内容</a></li>
          <li>WEBメディア運営</li>
        </ul>
        <div class="service__index__box">
          <img class="service__info__img_a" src="/service_webmedia_01.jpg" alt="JackPurcellSnap">
          <div class="service__index__box__infowrapper">
            <h2>Jack Purcell Snap</h2>
            <p>
              Instagramのファッションアカウント「Jack Purcell Snap」を運営しております。コンバース社の「JACK PURCELL」に特化したファッションアカウントです。<br>
              また、同アカウントのWEB版ファッションスナップサイト「<a class="text-link" href="https://jackpurcell-snap.com" target="_blank">jackpurcell-snap.com</a>」も運営しております。<br>
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

.page__top__title__webmedia__index{
  background-image: url("/page__top__title__bg__webmedia.png");
  color: #FFF;
}
.text-link{
  text-decoration: none;
  color: #86bd42;
  border-bottom: 1px solid rgba(134,189,66,1);
  transition: all .5s;
}
  .text-link:hover{
  border-bottom: 1px solid rgba(134,189,66,0);
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
