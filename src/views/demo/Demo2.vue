<template>
  <div>
    <div :style="indexBackgroundDiv">
      <div
        style="
          position: absolute;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          width: 100%;
          height: 100%;
          color: white;
          justify-content: center;
          display: flex;
          align-items: center;
          font-size: 1.4rem;
        "
      >
        111412112
        <div style="position: absolute; bottom: 1rem;">
          <a
          style="color:#ffffff;background-color:#ffffff;"
            href="javascript:void()"
            onclick="document.querySelector('#divId1').scrollIntoView(true)"
          >
            <div class="slide-fade-animation" style="font-size: 2.5rem">
              <span class="el-icon-arrow-down"> </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    <div :style="indexBackgroundDiv">1223</div>

    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    <div id="divId1">
      1111 1 1 1 1<br />
      1111 1 1 1 1<br />
    </div>
    1111 1 1 1 1<br />
    1111 1 1 1 1<br />
    <br />
  </div>
</template>

<script>

export default {
  data () {
    return {
      message: 'message',
      indexBackgroundDiv: {
        backgroundImage: "url(" + require("../../assets/images/bgi.jpeg") + ")",
        width: '100vw',
        height: '100vh',
        backgroundAttachment: "fixed",
        position: "relative"
      }
    }
  }
}
</script>

<style>
.slide-fade-animation {
  animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  position: relative;
}

@keyframes example {
  0% {
    left: 0px;
    top: 0px;
    opacity: 1;
  }

  100% {
    left: 0px;
    top: 20px;
    opacity: 0;
  }
}
</style>