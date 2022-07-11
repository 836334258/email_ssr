<template>
  <img
    v-if="!href"
    style="width: 100%; height: auto; font-size: 0"
    :style="style"
    :src="src"
    loading="lazy"
    :alt="alt"
  />
  <a v-else target="_blank" :href="href">
    <img
      style="width: 100%; height: auto; font-size: 0"
      :style="style"
      :src="src"
      loading="lazy"
      :alt="alt"
    />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './interface'

export default defineComponent({
  name: 'Image',
  props
})
</script>

<style lang="scss" scoped></style>
