<template>
  <div>
    <div class="container center">
      <h1 class="container__title">Проверьте e-mail</h1>
      <p class="container__message-big">
        Мы отправили письмо на examplemail@gmail.com. Перейдите по ссылке в
        письме, для смены пароля
      </p>
    </div>
    <p class="bottom-question center">
      Уже зарегистрированы? <nuxt-link to="/auth/sign-in">Войти</nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="sass">
@import "assets/auth"
</style>
