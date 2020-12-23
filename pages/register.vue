<template>
  <div>
    <Container title="Регистрация" class="center">
      <form>
        <div class="input-group">
          <label>
            E-mail
            <input type="email" />
          </label>
        </div>
        <div class="input-group">
          <label>
            Пароль
            <input
              v-model="password"
              :type="isPasswordVisible ? 'text' : 'password'"
            />
          </label>
          <button
            class="eye"
            :class="{ 'eye-visible': isPasswordVisible }"
            type="button"
            @click="isPasswordVisible = !isPasswordVisible"
          />
        </div>
        <div class="input-group">
          <label>
            Повторите пароль
            <input
              v-model="passwordCheck"
              :type="isPasswordVisible ? 'text' : 'password'"
            />
          </label>
        </div>
        <button class="button to-register">Зарегистрироваться</button>
        <button id="google" class="button" type="button">
          Войти через Google
        </button>
      </form>
    </Container>
    <p class="registered center">Уже зарегистрированы? <a href="#">Войти</a></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Container from '~/components/Container.vue'

export default Vue.extend({
  name: 'Register',
  components: {
    Container
  },
  data() {
    return {
      email: '',
      password: '',
      passwordCheck: '',
      isPasswordVisible: false
    }
  }
})
</script>

<style lang="sass">
@import "assets/colors"
body
  background-color: $grey
  padding-top: 186px
.eye
  width: 25px
  height: 20px

  position: absolute
  right: 5px
  top: 17px

  background: url(../assets/icons/password-eye/not-visible.svg) no-repeat 0

  &-visible
    background-image: url(../assets/icons/password-eye/visible.svg)

.to-register
  margin-top: 30px
  margin-bottom: 16px

#google
  margin-bottom: 39px
  background: #5086F7 url(../assets/icons/google.svg) no-repeat 5px 5px

.registered
  margin-top: 48px
  font-weight: normal
  text-align: center
  a
    text-decoration: underline
    font-weight: bold
    color: black
form
  display: flex
  flex-direction: column
  align-items: center
</style>
