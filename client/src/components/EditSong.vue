<template>
  <v-layout>
    <v-flex xs4>
    <panel title="Song Metadata">
      <v-text-field
        v-model="song.title"
        label="Title"
        required
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        v-model="song.artist"
        required
        :rules="[required]"
        label="Artist"
      ></v-text-field>
    <v-text-field
      v-model="song.genre"
      required
      :rules="[required]"
      label="Genre"
    ></v-text-field>
    <v-text-field
      v-model="song.album"
      required
      :rules="[required]"
      label="Album"
    ></v-text-field>
    <v-text-field
      v-model="song.albumImageUrl"
      required
      :rules="[required]"
      label="Album Image Url"
    ></v-text-field>
    <v-text-field
      v-model="song.youtubeId"
      required
      :rules="[required]"
      label="Youtube Id"
    ></v-text-field>
    </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-text-field
        v-model="song.tab"
        multi-line
        label="Tab"
        required
      :rules="[required]"
        ></v-text-field>

        <v-text-field
        v-model="song.lyrics"
        multi-line
        label="Lyrics"
        required
      :rules="[required]"
      ></v-text-field>
    </panel>

    <div class="danger-alert" v-if="error">
      {{ error }}
    </div>
    
    <v-btn class="cyan" @click="save" dark>Update Song</v-btn>

    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '../../services/SongsService';
export default {

components: {
  Panel
},

  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
      // songId: '',
      error: null,

      required: (value) => !!value || 'Required.'
    }
  },

  async mounted() {
     try {
        const songId = this.$store.state.route.params.songId;
        this.song = (await SongsService.show(songId)).data;

      } catch(err) {
        console.log('error getting song: ', err)
      }
  },

  methods: {
    async save() {
      this.error = null
      //make sure that every single value is defi ned
      const areAllFieldIn = Object
            .keys(this.song)
            .every(key => !!this.song[key])
        if(!areAllFieldIn) {
          this.error = 'Please fill in all required fields.'
          return 
        }
      //call Api
      const songId = this.$store.state.route.params.songId;

      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch(err) {
        console.log('error updating song: ', err)
      }
     
    }
  }
}
</script>

<style>
  .danger-alert {
    color: red;
  }
</style>
