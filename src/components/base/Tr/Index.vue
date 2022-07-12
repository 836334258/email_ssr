<template>
  <tr :align="align" :style="style"><slot/></tr>
</template>

<script lang="ts">
export default {
  name:'Tr'
}
</script>

<script setup lang="ts">
import  { props } from './interface'
defineProps(props)
</script>

<style lang="scss" scoped></style>
