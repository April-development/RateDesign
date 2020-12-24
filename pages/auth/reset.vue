<template>
  <div>
    <div class="center container">
      <h1 class="container__title">Восстановление пароля</h1>
      <label class="container__input-group">
        E-mail
        <input />
      </label>
      <p class="container__message">
        На ваш e-mail будут отправлены инструкции для восстановления пароля.
      </p>
      <button class="container__button">Продолжить</button>
    </div>
    <p class="center bottom-question">
      Уже зарегистрированы? <nuxt-link to="/auth/sign-in">Войти</nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="sass">
@import "~assets/auth"
@import "~assets/global"
</style>
