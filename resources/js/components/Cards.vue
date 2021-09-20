<template>
  <div class="card">
      <div class="container">
          <h3>Your postet images</h3>
          <div class="cards">
            <Card :post="post" v-for="(post, index) in postTest" :key="index" />
          </div>
      </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue"
import axios from 'axios'
export default {
  props: [ "post" ],
  components: {
    Card,
  },
  data() {
        return {
            postTest: [
                { postTitle: "title 1", postImage: "image-1", postTime: "Sep 7, 2021"},
                { postTitle: "title 2", postImage: "image-2", postTime: "Sep 8, 2021"},
                { postTitle: "title 3", postImage: "image-3", postTime: "Sep 9, 2021"},
                { postTitle: "title 4", postImage: "image-4", postTime: "Sep 10, 2021"}
            ],
        }
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          console.log(response)
        }
        catch (e) {
          console.log("Error")
        }
      },

    }
}
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    padding: 100px 16px;
    background-color: #f1f1f1;

    .cards {
      display: grid;
      gap: 32px;
      grid-template-columns: repeat(4 , 1fr);
    }
  }
</style>