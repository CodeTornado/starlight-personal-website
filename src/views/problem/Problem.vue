<template>
  <div>
    <h3 style="mmargin-bottom: 2em">问题解决</h3>
   <ArticleList  :articleList="[
          { id: 3, timeDateDD: 28, timeDateYY: '2021',timeDateMM: '10' , linkStr : '#' ,title: '文章标题',tag: '文章分类', content: '最详细的js方法文档，描述加示例，不怕你不会。'},
          { id: 1, timeDateDD: 30, timeDateYY: '2021',timeDateMM: '10' , linkStr : '#' ,title: '文章标题',tag: '文章分类', content: '最详细的js方法文档，描述加示例，不怕你不会。'},
          { id: 6, timeDateDD: 25, timeDateYY: '2021',timeDateMM: '10' , linkStr : '#' ,title: '文章标题',tag: '文章分类', content: '最详细的js方法文档，描述加示例，不怕你不会。'},
          { id: 4, timeDateDD: 27, timeDateYY: '2021',timeDateMM: '10' , linkStr : '#' ,title: '文章标题',tag: '文章分类', content: '最详细的js方法文档，描述加示例，不怕你不会。'},
          { id: 2, timeDateDD: 29, timeDateYY: '2021',timeDateMM: '10' , linkStr : '#' ,title: '文章标题',tag: '文章分类', content: '最详细的js方法文档，描述加示例，不怕你不会。'},
          { id: 5, timeDateDD: 26, timeDateYY: '2021',timeDateMM: '10' , linkStr : '#' ,title: '文章标题',tag: '文章分类', content: '最详细的js方法文档，描述加示例，不怕你不会。'}
        ]"/>
  </div>
</template>

<script>
import ArticleList from '../../components/ArticleList.vue'

export default {
  components: { ArticleList }
}
</script>

<style>
</style>