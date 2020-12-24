<template>
  <div>
    <div class="center container">
      <h1 class="container__title">Создайте новый пароль</h1>
      <label class="container__input-group">
        Пароль
        <input :type="eyeInputType" />
        <button
          class="container__input-group_eye"
          type="button"
          :class="eyeVisibilityClass"
          @click="togglePassword"
        />
      </label>
      <label class="container__input-group">
        Повторите пароль
        <input :type="eyeInputType" />
      </label>
      <button class="container__button">Сменить пароль</button>
    </div>
    <p class="bottom-question center">
      Уже зарегистрированы?
      <nuxt-link to="/auth/sign-in">Войти</nuxt-link>
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
