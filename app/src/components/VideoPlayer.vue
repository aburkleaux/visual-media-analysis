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
    console.log("before unmount event")
    if (this.player) {
      this.player.dispose();
      this.$store.commit('updatePlayer', null)
    }
  },
  created() {
    
    console.log("created event")
  },
  mounted: function () {
    console.log("mounted event")
    // this.player = videojs(this.$refs.videoPlayer, {  playbackRates: [0.5, 1, 1.5, 2] });
    
    // this.player.ready(() => {
    //   this.player.loop(true);

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