<template>
  <div>
    <div class="container center">
      <h1 class="container__title">Пароль изменен</h1>
      <p class="container__message-big">
        Пароль успешно изменен, нажмите на кнопку ниже, чтобы войти
      </p>
      <button class="container__button">Войти</button>
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
