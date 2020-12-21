<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped lang="sass">
@import "assets/colors"
.button
  color: white

  background-color: $black-100

  width: 328px
  height: 48px

  border-radius: 8px
  &:active
    background-color: $black-90
  &:disabled
    background-color: $black-40
  @media (min-width: 414px)
    width: 384px
</style>
