<template>
  <a :href="href" target="_blank" style="text-decoration: none; display: inline-block" :style="style">
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './interface'

export default defineComponent({
  name: 'Link',
  props,
})
</script>

<style lang="scss" scoped></style>
