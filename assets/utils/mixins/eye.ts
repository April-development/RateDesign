import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      isPasswordVisible: false
    }
  },
  computed: {
    eyeVisibilityClass(): Object {
      return {
        'container__input-group_eye-visible': this.isPasswordVisible
      }
    },
    eyeInputType(): String {
      return this.isPasswordVisible ? 'text' : 'password'
    }
  },
  methods: {
    togglePassword() {
      this.isPasswordVisible = !this.isPasswordVisible
    }
  }
})
