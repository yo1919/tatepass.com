<template>
  <div class="container">
    <header_edit />
    <!--WEBサイト制作ページ-->
    <main class="main main-webdesignpage">
      <div class="page__top__title page__top__title__webdesign__index">
        <h1>WEBサイト制作</h1>
      </div>
      <section class="main__container main__container__webdesign__index">
        <ul class="pankuzu-list">
          <li><a href="/">トップページ</a></li>
          <li><a href="/service">事業内容</a></li>
          <li>WEBサイト制作</li>
        </ul>
        <div class="service__index__box">
          <img class="service__info__img_a" src="/service__webdesign__corp.png" alt="コーポレートサイト">
          <div class="service__index__box__infowrapper">
            <h2>コーポレートサイト</h2>
            <p>
              法人のお客様、個人のお客様問わず様々な業界や業種のコーポレートサイトを、予算や目的に合わせて最適な提案をさせていただきます。<br>
              ただ制作して納品して終わりではなく、実際にサイトをリリースした後にも細やかなフォローでお客様のサイト運用をお手伝い致します。<br>
              助成金を活用してのサイト制作についてもお気軽にご相談ください。
            </p>
            <!--a class="button" href="/service/dna/dnaxy">
              詳しく見る
              <div class="button__horizontal"></div>
              <div class="button__vertical"></div>
            </a-->
          </div>
        </div><!--/service__index__box-->
        <div class="service__index__box service__index__box__rowrevere">
          <img class="service__info__img_a" src="/service__webdesign__EC.png" alt="ECサイト">
          <div class="service__index__box__infowrapper">
            <h2>ECサイト</h2>
            <p>
              ECサイトを作ったのはいいけど商品の入れ替えなど運用するのが難しいと感じる方が多いそうです。<br>
              当社は運用がスムーズにいくように分かりやすい操作マニュアルを用意していますので、WEBに強い方がいなくても安心してECサイトの運用が出来ます。<br>
              助成金を活用してのサイト制作についてもお気軽にご相談ください。
            </p>
            <!--a class="button" href="/service/dna/dnaxy">
              詳しく見る
              <div class="button__horizontal"></div>
              <div class="button__vertical"></div>
            </a-->
          </div>
        </div><!--/service__index__box-->
        <div class="service__index__box">
          <img class="service__info__img_a" src="/service__webdesign__LP.png" alt="ランディングページ">
          <div class="service__index__box__infowrapper">
            <h2>ランディングページ</h2>
            <p>
              ただ見た目がオシャレなランディングページを作るのではなく、ターゲットの選定から競合の調査など成果の出るランディングページの制作をしています。<br>
              費用面もお客様のご予算に合わせて最適なご提案をさせていただきます。<br>
              助成金を活用してのサイト制作についてもお気軽にご相談ください。
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
      title: '事業内容 -「WEBサイト制作」| 株式会社tatepass',
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

.page__top__title__webdesign__index{
  background-image: url("/page__top__title__bg__web.png");
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
