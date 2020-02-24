<template>
  <div>
    <header_edit />
    <h1 style="text-align:center; margin:100px auto;">送信が完了しました。</h1>
    <nuxt-link to="/" style="display:block; text-align:center;">トップページへ戻る</nuxt-link>
    <footer_edit />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import header_edit from '~/components/header.vue'
import footer_edit from '~/components/footer.vue'
export default {
  components: {
    Logo,
    header_edit,
    footer_edit
  }
}
</script>
