<template>
  <div>
      <img :src="require(`../assets/Image/macvswin.jpeg`).default" />
  </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>
div{
    display: flex;
        justify-content: center;
        align-items: center;
}

    img {
        display: flex;
        justify-content: center;
        width: 500px;
        height: 100%;
        margin-top: 100px;
        margin-bottom: 100px;
    }
</style>