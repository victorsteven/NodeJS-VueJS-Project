<template>
    <panel title="Lyrics">
      <textarea
        readonly
        v-model="song.lyrics"
        multi-line
        label="Tab"
        ></textarea>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: ['song'],
  components: {
    Panel
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}

textarea {
  width: 100%;
  font-family: monospace;
  border: none; 
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}

</style>


