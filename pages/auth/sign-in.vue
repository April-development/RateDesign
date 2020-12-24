<template>
  <div>
    <div class="center container">
      <h1 class="container__title">Вход</h1>
      <label class="container__input-group">
        E-mail
        <input type="email" />
      </label>
      <label class="container__input-group">
        Пароль
        <input :type="eyeInputType" />
        <button
          class="container__input-group_eye"
          :class="eyeVisibilityClass"
          type="button"
          @click="togglePassword"
        />
      </label>
      <nuxt-link to="/auth/reset" class="container__forgot-password">
        Забыли пароль?
      </nuxt-link>
      <button class="container__button">Войти</button>
      <button class="container__button container__button-google" type="button">
        Войти через Google
      </button>
    </div>
    <p class="bottom-question center">
      Ещё не зарегистрированы?
      <nuxt-link to="/auth/registration">Зарегистрироваться</nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import eye from '~/assets/utils/mixins/eye'

export default Vue.extend({
  mixins: [eye]
})
</script>

<style lang="sass">
@import "../../assets/auth"
</style>
