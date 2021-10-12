<template>
  <div>
    <ProgressBall />
    <header></header>

    <MainImg @toParent="scrollIntoView" />
    <main>
      <div style="margin: 0 auto; width: 75%">
        <div id="NewArticle"><NewArticle /><br /></div>
      </div>
    </main>
    <footer><Footer></Footer></footer>
  </div>
</template>

<script>
import MainImg from './components/MainImg.vue'
import ProgressBall from './components/ProgressBall.vue'
import NewArticle from '../new-article/NewArticle.vue'
import Footer from '../footer/Footer.vue'

export default {
  components: { MainImg, ProgressBall, NewArticle, Footer },
  methods: {
    scrollIntoView (htmlId) {
      document.getElementById(htmlId).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  }
}
</script>

<style>
</style>