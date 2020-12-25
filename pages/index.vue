<template>
  <div>
    <input v-model="url" />
    <button @click="sendRequest">Отправить</button>
    {{ response }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      url: '',
      response: null
    }
  },
  methods: {
    async sendRequest() {
      this.response = await this.$axios.$get(this.url)
    }
  }
})
</script>
