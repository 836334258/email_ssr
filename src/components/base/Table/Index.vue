<template>
  <table
    :align="tableAlign"
    :bgcolor="bgColor"
    :width="width"
    :height="height"
    cellspacing="0"
    cellpadding="0"
    role="presentation"
    border="0"
    style="
      float: none;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-spacing: 0;
      table-layout: auto;
      margin-top: 0px;
      margin-bottom: 0px;
    "
    :style="style"
  >
    <tbody :align="bodyAlign" :tbstyle="bodyStyle">
      <slot> </slot>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './interface'

export default defineComponent({
  name: 'Table',
  props
})
</script>

<style lang="scss" scoped></style>
