<template>
  <div class="top-menu-bar-box">
    <ul>
      <li><a href="#" class="hvr-wobble-skew">首页</a></li>
      <li><a href="#" class="hvr-wobble-skew">问题解决</a></li>
      <li><a href="#" class="hvr-wobble-skew">技术分享</a></li>
      <li><a href="#" class="hvr-wobble-skew">学习笔记</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top-menu-bar-box {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  z-index: 6;
  top: 0px;
  left: 0px;

  height: 4em;
  width: 100%;
  z-index: 1;
  background-color: white;
  box-shadow: 0 4px 10px 10px rgb(0 0 0 / 5%);

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.2em;
}
.top-menu-bar-box ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10em;
}
.top-menu-bar-box li {
  list-style-type: none;
}
.top-menu-bar-box li a{
  text-decoration: none;
}
/*正常的未被访问过的链接*/
.top-menu-bar-box li a:link {
    text-decoration: none;
}
/*已经访问过的链接*/
.top-menu-bar-box li a:visited {
    text-decoration: none;
}
</style>