<template>
  <div class="container">
    <header_edit />
    <!--DNA検査ページ-->
    <main class="main main-dnapage">
      <div class="page__top__title page__top__title__dna__index">
        <h1>DNA検査</h1>
      </div>
      <section class="main__container main__container__service__index">
        <ul class="pankuzu-list">
          <li><a href="/">トップページ</a></li>
          <li><a href="/service">事業内容</a></li>
          <li>DNA検査</li>
        </ul>
        <div class="service__index__box">
          <img class="img__service__dnaxylogo service__info__img_a" src="/dNAXY_icon_yoko.jpg" alt="dNAXY（ナクシー）">
          <div class="service__index__box__infowrapper">
            <h2>店舗専用ダイエットDNA検査</h2>
            <p>
              dNAXY（ナクシー）は店舗専用に開発したダイエットDNA検査です。<br>
              主にエステサロン様やパーソナルジム様など、美容やフィットネスの店舗ビジネスを運営されている方々に導入していただいております。細かなアップデートによる圧倒的なコンテンツの結果レポートと、使いやすく設計されたWEBシステムで導入店舗様とエンドユーザー様をサポート致します。
            </p>
            <!--a class="button" href="/service/dna/dnaxy">
              詳しく見る
              <div class="button__horizontal"></div>
              <div class="button__vertical"></div>
            </a-->
          </div>
        </div><!--/service__index__box-->
        <div class="service__index__box service__index__box__rowrevere">
          <img class="service__info__img_a" src="/service__dna__oem__icon.jpg" alt="DNA検査 OEM開発">
          <div class="service__index__box__infowrapper">
            <h2>オリジナルDNA検査の開発<br class="sp-only-br">（OEM開発）</h2>
            <p>
              検査項目や結果レポートの内容からパッケージデザインなど、全てオリジナルのDNA検査を開発することが可能です。<br>
              遺伝子に関する知識がなくてもご安心ください。解析する遺伝子の選定から結果レポート内容の監修、アップセルやクロスセルの提案まで幅広くサポートさせていただきます。
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
      title: '事業内容 -「DNA検査」| 株式会社tatepass',
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

.page__top__title__dna__index{
  background-image: url("/page__top__title__bg__dna.png");
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
