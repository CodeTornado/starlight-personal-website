<template>
  <div>
    <ProgressBall />
    <MainImg @toParent="scrollIntoView" />
    <div style="margin: 0 auto; width: 75%;">
      <div id="NewArticle"><NewArticle /><br /></div>
    </div>
  </div>
</template>

<script>
import MainImg from './components/MainImg.vue'
import ProgressBall from './components/ProgressBall.vue'
import NewArticle from '../new-article/NewArticle.vue'

export default {
  components: { MainImg, ProgressBall, NewArticle },
  methods: {
    scrollIntoView (htmlId) {
      document.getElementById(htmlId).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  }
}
</script>

<style>
</style>