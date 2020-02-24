<template>
  <div>
    <iframe name="hidden_iframe" style="width: 0; height: 0;" @load="changeSrc"></iframe>
    <form action="https://docs.google.com/forms/u/8/d/e/1FAIpQLScl2UmDF1zsQYmyUyDe_JUaB1tXThgqeaT65gQH7roQRiDxGA/formResponse"
        method="POST" id="ss-form" target="hidden_iframe" @submit="submitForm">
      <section class="question-wrapper">
          <p><span class="hissu">必須</span>メールアドレス</p>
          <input class="input-email" id="email" type="text" name="emailAddress" placeholder="example@mail.co.jp" required>
      </section>
      <section class="question-wrapper">
          <p><span class="hissu">必須</span>お名前</p>
          <div class="name-wrapper">
              <div class="name-wrapper-inner">
                <input class="input-name" id="familyname" type="text" name="entry.1585904755" placeholder="性" required>
              </div>
              <div class="name-wrapper-inner">
                <input class="input-name" id="firstname" type="text" name="entry.664917916" placeholder="名" required>
              </div>
          </div>
      </section>
      <section class="question-wrapper">
          <p><span class="hissu">必須</span>会社名／店舗名</p>
          <input class="input-company" type="text" name="entry.1017278048" placeholder="" required>
      </section>
      <section class="question-wrapper">
          <p><span class="hissu">必須</span>電話番号</p>
          <input class="input-tel" id="tel" type="text" name="entry.1542136516" placeholder="" required>
      </section>
      <section class="question-wrapper">
          <p><span class="hissu">必須</span>お問い合わせ内容</p>
          <select class="minimal" name="entry.1958393910" placeholder="選択してください" required>
            <option value='' disabled selected style='display:none;'>選択してください</option>
            <option value="DNA検査について">DNA検査について</option>
            <option value="WEBサイト制作について">WEBサイト制作について</option>
            <option value="アプリ開発／WEBシステム開発について">アプリ開発／WEBシステム開発について</option>
            <option value="取材・メディア掲載について">取材・メディア掲載について</option>
            <option value="その他">その他</option>
          </select>
      </section>
      <section class="question-wrapper">
          <p><span class="nini">任意</span>お問い合わせの詳細</p>
          <textarea class="" name="entry.126337165" rows="" cols="" placeholder="詳しいお問い合わせ内容はこちらに入力してください。"></textarea>
      </section>
      <section class="question-wrapper">
        <p><span class="nini">任意</span>tatepassを知ったキッカケ（複数選択可）</p>
        <div class="contacy-label-wrapper">
          <label class="check-label"><input type="checkbox" name="entry.491022026" value="Twitter">Twitter</label>
          <label class="check-label"><input type="checkbox" name="entry.491022026" value="Instagram">Instagram</label>
          <label class="check-label"><input type="checkbox" name="entry.491022026" value="友人や知人からの紹介">友人や知人からの紹介</label>
          <label class="check-label"><input type="checkbox" name="entry.491022026" value="Google等の検索サイトから">Google等の検索サイトから</label>
          <label class="check-label"><input type="checkbox" name="entry.491022026" value="弊社の営業">弊社の営業</label>
          <label class="check-label"><input type="checkbox" name="entry.491022026" value="その他">その他</label>
        </div>
      </section>
      <section class="question-wrapper">
        <p><span class="nini">任意</span>検索サイトでtatepassを知るキッカケになったキーワードなどがありましたら教えてください。</p>
        <textarea class="" name="entry.946991265" rows="" cols="" placeholder=""></textarea>
      </section>
      <input class="submit" id="submitBtn" type="submit" value="送信する" :disabled="is_sending">
    </form> 
  </div>
</template>

<script>
  export default {
    name : 'contact-form'
    , data() {
      return {
        // フォームがサブミットされているか
        has_submit : false
        // 現在フォームを送信中かどうか
        , is_sending : false
      }
    }
    , methods: {
      // hidden_iframeが読み込まれたことを検知
      changeSrc() {
        if (this.has_submit) {
          this.$emit('send');
        }
      }
      // formがサブミットしたときのイベント
      , submitForm() {
        this.has_submit = true;
        this.is_sending = true;
      }
    }
  }
</script> 
