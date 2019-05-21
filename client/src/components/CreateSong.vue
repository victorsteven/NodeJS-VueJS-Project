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
    
    <v-btn class="cyan" @click="create">Create Song</v-btn>

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
      error: null,

      required: (value) => !!value || 'Required.'
    }
  },

  methods: {
    async create() {
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
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch(err) {
        console.log('error creating song: ', err)
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
