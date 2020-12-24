<template>
  <div>
    <div class="center container">
      <h1 class="container__title">Регистрация</h1>
      <label class="container__input-group">
        Имя
        <input type="text" />
      </label>
      <label class="container__input-group">
        Никнейм
        <input type="text" />
      </label>
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
      <label class="container__input-group">
        Повторите пароль
        <input :type="eyeInputType" />
      </label>
      <button class="container__button">Зарегистрироваться</button>
      <button class="container__button container__button-google" type="button">
        Войти через Google
      </button>
    </div>
    <p class="bottom-question center">
      Уже зарегистрированы? <nuxt-link to="/auth/sign-in">Войти</nuxt-link>
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
