<template>
  <div>
    <ProgressBall />
    <MainImg @toParent="scrollIntoView" />
    <TopMenuBar />
    <main style="margin: 0 auto; width: 75%">
      <div id="NewArticle"><NewArticle /><br /></div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import MainImg from './components/MainImg.vue'
import ProgressBall from './components/ProgressBall.vue'
import NewArticle from '../new-article/NewArticle.vue'
import TopMenuBar from '../header/TopMenuBar.vue'
import Footer from '../footer/Footer.vue'

export default {
  components: { MainImg, ProgressBall, NewArticle, Footer, TopMenuBar },
  methods: {
    scrollIntoView (htmlId) {
      document.getElementById(htmlId).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  }
}
</script>

<style>
</style>