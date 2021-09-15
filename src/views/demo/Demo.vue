<template>
  <div>
    <div :style="setBackground">1223</div>

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
    <div :style="setBackground">1223</div>

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
    <br />
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'message',
      setBackground: {
        backgroundImage: "url(" + require("../../assets/images/bgi.jpeg") + ")",
        width: '100%',
        height: '600px',
        backgroundAttachment: "fixed"
      }
    }
  }
}
</script>

<style>
</style>