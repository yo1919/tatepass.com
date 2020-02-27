<template>
  <div class="container">
    <header_edit />
    <main>
      <!-- 404 の場合のdiv -->
      <div v-if="error.statusCode === 404">ページが見つかりません</div>
      <!-- それ以外のdiv-->
      <div  v-else>エラーが発生しました</div>
    </main>
    <footer_edit />
  </div>
</template>

<style>
</style>

<script>
import header_edit from '~/components/header.vue'
import footer_edit from '~/components/footer.vue'
export default {
  props: ['error']
  , components : {
    header_edit
    , footer_edit
  }
}
</script> 

