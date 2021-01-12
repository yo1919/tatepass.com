<template>
  <div class="container">
    <header_edit />
    <!--メインコンテンツここから-->
    <main class="main main-toppage">
      <div class="page__top__title page__top__title__contact__index">
        <h1>お問い合わせ</h1>
      </div>
      <!--メインコンテンツ-->
      <article class="main__container">
        <ul class="pankuzu-list">
          <li><a href="/">トップページ</a></li>
          <li>お問い合わせ</li>
        </ul>
        <!--お問い合わせここから-->
        <section class="main__container__wrapper main__container__contact">
          <p class="main__container__contact-discp">
            tatepassへのお問い合わせやご相談は、以下のフォームにご入力ください。<br>
            ご入力いただきました個人情報は弊社のプライバシーポリシーに基づき取扱を行い、厳重に管理致します。<br>
            お問い合わせやご相談につきまして、以下の点をご了承いただけますようお願い申し上げます。<br>
            ・内容によってはご回答までお時間をいただく場合やご回答が出来ない場合がございます。<br>
            ・ご本人様およびご連絡先の確認ができないお問い合わせにつきましてはご回答致しかねます。
          </p>
          <div class="main__container__wrapper__contactform">
            <contact v-on:send="onFormSubmit"/>
          </div>
        </section>
        <!--お問い合わせここまで-->
      </article>
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
      title: 'お問い合わせ | 株式会社tatepass',
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

.page__top__title__contact__index{
  background-image: url("/page__top__title__bg__contact.jpg");
  color: #fff;
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
