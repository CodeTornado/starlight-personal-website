<template>
  <div>
    <ProgressBall />
    <MainImg @toParent="scrollIntoView" />
    <div>1221<br /></div>
    <div>1221<br /></div>
    <div id="testDiv">1222244521<br /></div>
    <div>1221<br /></div>
    <div>1221<br /></div>
  </div>
</template>

<script>
import MainImg from './components/MainImg.vue'
import ProgressBall from './components/ProgressBall.vue'

export default {
  components: { MainImg, ProgressBall },
  methods: {
    scrollIntoView (htmlId) {
      document.getElementById(htmlId).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  }
}
</script>

<style>
</style>