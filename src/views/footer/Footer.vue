<template>
  <div class="footer-box">
    <div class="footer-left-share">
      2020 - 2021 © Reach -
      <a href="#" target="_blank" rel="noopener noreferrer">shimmer</a>
    </div>
    <div class="footer-right-share">
      <a href="https://wpa.qq.com/msgrd?v=3&uin=752521095&site=qq&menu=yes" class="circle">
        <div style="margin: 30% auto" class="el-icon-chat-dot-round"></div>
      </a>
      <a href="mailto:15600559182@163.com" class="circle">
        <div style="margin: 30% auto" class="el-icon-message"></div>
      </a>
      <a href="https://github.com/CodeTornado/starlight-personal-website/tree/master" class="circle">
        <div style="margin: 30% auto" class="el-icon-document"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-box {
  padding: 1.5em 5em;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 4px 10px 10px rgb(0 0 0 / 5%);
  height: 5em;
}
.footer-left-share {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  color: rgb(145, 147, 152);
  font-size: 0.7em;
}
.footer-right-share {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
}
.circle {
  background-color: transparent;
  border: 1px solid #d4d3d3;
  border-radius: 50%;
  color: #34495e;
  display: inline-block;
  font-size: 16px;
  height: 40px;
  line-height: 1;
  position: relative;
  text-align: center;
  width: 40px;
}
.circle:after {
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgb(90 90 90 / 30%);
  box-sizing: content-box;
  content: "";
  height: 100%;
  left: 0;
  opacity: 1;
  padding: 0;
  position: absolute;
  top: 0;
  transform: scale(1);
  transition: transform 0.2s, opacity 0.4s;
  width: 100%;
}
</style>