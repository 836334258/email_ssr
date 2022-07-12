<template>
  <td
    :width="width"
    :height="height"
    :align="align"
    :style="style"
    :valign="valign"
  >
    <slot />
  </td>
</template>

<script lang="ts">
export default {
  name: 'Td'
}
</script>

<script setup lang="ts">
import { props } from './interface'
defineProps(props)
</script>

<style lang="scss" scoped></style>
