<template>
<div>
    <Navigation />
    <router-view />
</div>
    
</template>

<script>
import Navigation from '../js/components/Navigation.vue'
import Cards from './components/Cards.vue'
import AnCard from './components/AnCard.vue'
import Posts from './components/Posts.vue'
import axios from 'axios'
export default {
    data() {
        return {
            
        }
    },
    components: {
        Navigation, Cards, Posts
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.pageNumber,
              _limit: this.postLimit,
              
            }
          })
          this.totalPages = Math.ceil(response.headers["x-total-count"] / this.postLimit)
          this.posts = response.data
        }
        catch (e) {
          alert("Error")
        }
      },

    },
    mounted() {
        this.fetchPosts();
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

button,
.router-button {
    transition: 500ms ease all;
    cursor: pointer;
    margin-top: 24px;
    padding: 12px 24px;
    background-color: #303030;
    color: #fff;
    border-radius: 20px;
    border: none;
    text-transform: uppercase;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: rgba (48, 48, 48, 0.7);
    }
}


</style>