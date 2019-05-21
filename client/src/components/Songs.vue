<template>

  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Songs">
          <v-btn 
          @click="navigateTo({name: 'songs-create'})"
          slot="action"
            class="cyan accent-2" 
            light medium absolute middle right fab
            >
            <v-icon>add</v-icon>
          </v-btn> 
          <div class="song" v-for="(song, index) in songs" :key="index">
            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                  {{ song.title }}
                </div>
                <div class="song-artist">
                  {{ song.artist }}
                </div>
                <div class="song-genre">
                  {{ song.genre }}
                </div>
                <v-btn class="cyan" 
                      @click="navigateTo({
                          name: 'song', 
                          params: {
                            songId: song.id
                          }
                      })">
                      View
                </v-btn>
              </v-flex>

              <v-flex xs6>
                <img :src="song.albumImageUrl" class="album-image" alt="">
              </v-flex>
            </v-layout>
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '../../services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    }
  },

  async mounted() {
    this.songs = (await SongsService.index()).data;
    console.log('songs: ', this.song)
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
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
</style>
