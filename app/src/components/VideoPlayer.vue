<template>
  <div>
    <video
      id="videoPlayer"
      ref="videoPlayer"
      width="600"
      height="300"
      data-setup="{ &quot;inactivityTimeout&quot;: 0 }"
      class="video-js vjs-fluid vjs-default-skin"
      controls
      playsinline

    >
      <!-- <source
        :src="video_url"
        type="video/mp4"
      > -->
    </video>
  </div>
</template>

<script>
import videojs from 'video.js'
import '@/../node_modules/video.js/dist/video-js.css'

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data: function () {
    return {
      video_url: '',
      player: null
    }
  },
  beforeUnmount() {
    console.log("Vue before unmount event")
    console.log("Remove the player if we are not activly viewing it.  Save the state for when we return")

    if (this.player) {
      this.player.dispose();
      this.$store.commit('updatePlayer', null)
    }

  },
  created() {
    
    console.log("Vue created event")
  },
  mounted: function () {
    console.log("Vue mounted event")
    console.log("Create the player and apply the current state from the vuex store")
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
    });
  }
}

</script>

<style>
  .video-js .vjs-current-time, .vjs-no-flex .vjs-current-time {
    display: block; }
</style>