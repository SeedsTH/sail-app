<template>
    <div class="posts">
        <form @submit.prevent>
            <div class="top">
                <div>
                    <input v-model="searchByQuery" placeholder="Search..." />
                    <h4>Post list</h4>
                    <input v-model="title" type="text" placeholder="title" />
                    <input
                        v-model="body"
                        type="text"
                        placeholder="description"
                    />
                    <button @click="addNewPost">Create new post</button>
                    <button @click="sortBy('title')">Sort by title</button>
                    <button @click="sortBy('body')">Sort by content</button>
                </div>
                <div>
                    <select>
                        <option disabled value="" @change="selectedSort"
                            >Choose option</option
                        >
                        <option
                            v-for="option in sortOptions"
                            :key="option.value"
                            :value="option.value"
                        >
                            {{ option.name }}</option
                        >
                    </select>
                </div>
            </div>
        </form>
        <div>
            <h3 class="noPosts" v-if="posts.length <= 0">
                You dont have Posts
            </h3>
        </div>
        <div class="pagination">
            <div
                class="page"
                :class="{ current: page === pageNum }"
                v-for="pageNum in totalPages"
                :key="pageNum"
                @click="changePage(pageNum)"
            >
                {{ pageNum }}
            </div>
        </div>
        <div
            class="postss"
            else
            v-for="post in searchAndSortPosts"
            :key="post.id"
        >
            <div class="post gradient-border">
                {{ post.title.split(" ")[0] }}
            </div>
            <div class="post gradient-border">{{ post.body }}</div>
            <button @click="deletePost(post.id)">Delete</button>
        </div>
        <div ref="observer" class="observer"></div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Post",
    // props: {
    //     posts: {
    //         type: Array,
    //         required: true,
    //     }
    // },
    data() {
        return {
            post: {},
            title: "",
            body: "",
            posts: [],
            page: 1,
            postLimit: 5,
            totalPages: 0,
            selectedSort: "",
            searchByQuery: "",
            sortOptions: [
                { value: "title", name: "By title" },
                { value: "body", name: "By content" }
            ]
        };
    },
    methods: {
        changePage(pageNum) {
            this.page = pageNum;
            this.fetchPosts();
        },
        addNewPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body
            };
            this.posts.push(newPost);
            this.title = "";
            this.body = "";
        },
        async fetchPosts() {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: this.page,
                            _limit: this.postLimit
                        }
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers["x-total-count"] / this.postLimit
                );
                this.posts = response.data;
            } catch (e) {
                alert("Error");
            }
        },
        async lazyLoading() {
            try {
                this.page += 1;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: this.page,
                            _limit: this.postLimit
                        }
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers["x-total-count"] / this.postLimit
                );
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert("Error");
            }
        },
        deletePost(id) {
            this.posts = this.posts.filter(p => p.id !== id);
        },
        sortBy(prop) {
            this.posts.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
        }
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((p1, p2) =>
                p1[this.sortOptions]?.localeCompare(p2[this.sortOptions])
            );
        },
        searchAndSortPosts() {
            return this.sortedPosts.filter(p =>
                p.title.toLowerCase().includes(this.searchByQuery.toLowerCase())
            );
        }
    },

    mounted() {
        this.fetchPosts();

        const options = {
            rootMargin: "0px",
            threshold: 1.0
        };
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && this.page < this.totalPages) {
                this.lazyLoading();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    }
};
</script>

<style lang="scss" scoped>
.posts {
    margin-left: 10px;
}
form {
    margin: 30px;
    display: flex;
    align-items: center;

    .top {
        input {
            height: 45px;
        }
    }
}
.postss {
    display: flex;
    align-items: center;

    .post {
        width: 500px;
        margin-left: 30px;
        margin-bottom: 10px;

        button {
            margin-bottom: 120px !important;
            margin-left: 50px !important;
        }
    }
    .noPosts {
        margin-left: 20px;
        color: red;
    }
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination {
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;

    .page {
        border: 1px solid black;
        padding: 10px;
        cursor: pointer;
    }
    .current {
        border: 2px solid green;
    }
}

.gradient-border {
    --border-width: 3px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #222;
    border-radius: var(--border-width);

    &::after {
        position: absolute;
        content: "";
        top: calc(-1 * var(--border-width));
        left: calc(-1 * var(--border-width));
        z-index: -1;
        width: calc(100% + var(--border-width) * 2);
        height: calc(100% + var(--border-width) * 2);
        background: linear-gradient(
            60deg,
            hsl(224, 85%, 66%),
            hsl(269, 85%, 66%),
            hsl(314, 85%, 66%),
            hsl(359, 85%, 66%),
            hsl(44, 85%, 66%),
            hsl(89, 85%, 66%),
            hsl(134, 85%, 66%),
            hsl(179, 85%, 66%)
        );
        background-size: 300% 300%;
        background-position: 0 50%;
        border-radius: calc(2 * var(--border-width));
        animation: moveGradient 4s alternate infinite;
    }
}

@keyframes moveGradient {
    50% {
        background-position: 100% 50%;
    }
}
.observer {
    height: 100px;
    background-color: red;
}
</style>
