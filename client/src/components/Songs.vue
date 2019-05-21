<template>

  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Songs">
            <div>
              <h3>YO YO YO</h3>
            <p>
              Hello there is a paragraph
            </p>
            </div>
        </panel>
      </v-flex>
    </v-layout>
    
  </div>
</template>

<script>

import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>

