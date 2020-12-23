<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="sass">
@import "assets/breakpoints"
.container
  width: 592px

  background-color: white

  border-radius: 10px
  box-shadow: 0 4px 16px rgba(56,56,56,0.1)

  display: flex
  flex-direction: column
  align-items: center

  @media (max-width: $ph)
    height: 100%

.title
  font-size: 36px
  line-height: 49px
  margin-top: 32px
  margin-bottom: 48px
  @media (max-width: $ph)
    margin-top: 78px
</style>
