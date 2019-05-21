<template>
  <panel title="Youtube">
    <!-- {{ youtubeId }} -->
    <youtube 
      :video-id="youtubeId"
      player-width="500"
      :player-height="200"
    >
    </youtube>

  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },

  props: ['youtubeId']
}
</script>
