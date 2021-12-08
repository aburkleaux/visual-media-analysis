<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <VideoPlayer :options="videoOptions" />
  </div>
</template>

<script>
// @ is an alias to /src
import VideoPlayer from "@/components/VideoPlayer.vue";
import '@/../node_modules/video.js/dist/video-js.css'

export default {
  name: 'Home',
  components: {
    VideoPlayer
  },
  data() {
		return {
			videoOptions: {
          preload: 'auto',
          loop: true,
          controls: true,
          playbackRates: [0.5, 1, 1.5, 2],
          sources: [
            {
              src: "https://d13dkmtor0xyui.cloudfront.net/tears_of_steel_480p.mp4",
              type: "video/mp4"
            }
          ]
        }
		};
	}
}
</script>
