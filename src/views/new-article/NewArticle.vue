<template>
  <div>
    <h3 class="main-title">最新文章</h3>
    <div>
      <ul class="article-list">
        <li
          class="article-li"
          v-for="item in [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
          ]"
          v-bind:item="item"
          :key="item.id"
        >
          <div class="right-img-time-box hvr-sweep-to-bottom">
            <div class="right-time-box">
              <span>30</span>
              <p>2021年10月</p>
            </div>
            <!-- <div class="right-img-box"></div> -->
          </div>
          <div class="article-text-box hvr-float">
            <span class="article-text-tag">#文章分类</span>
            <a href="#" class="article-title-a"><h3>文章标题</h3></a>
            <div>最详细的js方法文档，描述加示例，不怕你不会。</div>
            <a href="#"><span class="show-article-a hvr-forward cyxy-trs-source">查看文章 >>></span></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-title {
  margin-bottom: 2em;
}
.article-li {
  border-top: 2px solid #e6e6e670;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 25px;
  padding-bottom: 15px;
}
.article-li > div {
  flex: 1;
}
.article-li .article-text-box {
  flex: 5;
}
.right-img-time-box {
  height: 130px;
  width: 130px;
  display: inline-block;
  overflow: hidden;
  transition: all 0.35s ease-in-out 0s;
  background-color: rgb(249, 249, 249);
}
.right-time-box span {
  font-size: 4.6em;
  text-align: center;
  display: inline-block;
  width: 100%;
  margin-top: 10%;
  line-height: 80%;
  font-weight: bold;
}
.right-time-box p {
  text-align: center;
}
.article-text-box h3 {
  display: inline-block;
  border-bottom: 2px solid rgb(224, 224, 224);
  margin-bottom: 8px;
  margin-top: 3px;
  padding-bottom: 15px;
  line-height: initial;
}
.article-title-a {
  text-decoration: none;
  color: initial;
}
.article-text-tag {
  display: block;
  color: rgb(199, 204, 212);
  color: rbg(116, 129, 148);
  font-size: 12px;
}
.show-article-a {
  display: block;
  color: red;
  font-size: 0.7em;
  margin-top: 1.3em;
}
</style>
