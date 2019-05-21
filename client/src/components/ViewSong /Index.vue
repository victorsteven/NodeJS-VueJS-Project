<template>
<div>
<v-layout>
  <v-flex xs6>
    <song-metadata :song="song" />
  </v-flex>

  <v-flex class="ml-2">
    <you-tube :youtubeId = "song.youtubeId"></you-tube>
  </v-flex>
</v-layout>

<v-layout>
  <v-flex xs6 class="mt-4">
    <tab :song="song"/>
  </v-flex>

  <v-flex xs6 class="ml-2 mt-4">
    <lyrics :song="song"></lyrics>
  </v-flex>
</v-layout>

</div>
</template>

<script>
import SongsService from '../../../services/SongsService'
import Panel from '@/components/Panel';
import SongMetadata from '../ViewSong /SongMetadata'
import YouTube from '../ViewSong /YouTube';
import Lyrics from '../ViewSong /Lyrics'
import Tab from '../ViewSong /Tab'

export default {

  components: {
    Panel, SongMetadata, YouTube, Lyrics, Tab
  },

  data() {
    return {
      song: {}
    }
  },
 async mounted() {

    const songId = this.$store.state.route.params.songId;
     this.song = (await SongsService.show(songId)).data;

     console.log('this is the product: ',  this.song)

  }
}
</script>

<style scoped>


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
