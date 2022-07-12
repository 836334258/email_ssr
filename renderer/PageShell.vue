<template>
  <LocketHeader :logo-option="logoOption" :nav-list="navList" />
  <slot />
  <LocketFooter :after-icon="afterIcon" :media-link="mediaLink" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UsHeaderData from '@/components/base/Header/data'
import UsFooterData from '@/components/base/Footer/data'
export default defineComponent({
  name: 'PageShell',
  data() {
    return {
      ...UsHeaderData.us,
      ...UsFooterData.us
    }
  }
})
</script>
