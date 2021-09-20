<template>
    <header>
        <nav class="container">
            <div class="logo">
                <router-link class="company-logo" :to="{ name: 'Upload' }"
                    >Technoji</router-link
                >
            </div>
            <div class="nav-link">
                <router-link class="link" :to="{ name: 'Home' }"
                    >Home</router-link
                >
                <router-link class="link" :to="{ name: 'Upload' }"
                    >Upload</router-link
                >
                <router-link class="link" :to="{ name: 'Posts' }"
                    >Posts</router-link
                >
                <router-link class="link" :to="{ name: 'Dashboard' }"
                    >Dashboard</router-link
                >
                <router-link class="link" :to="{ name: 'AppleMain' }"
                    >Apple</router-link
                >
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Navigation"
};
</script>

<style lang="scss" scoped>
header {
    display: flex;
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;

    .logo {
        .company-logo {
            text-decoration: none;
            font-weight: 500;
            font-style: bold;
            color: #333;
            font-size: 30px;
        }
    }

    .nav-link {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: 500;
        padding: 0 8px;
        transition: 0.3s color ease;

        .link {
            padding-left: 30px;

            &:hover {
                color: #1eb8b8;
            }
        }
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 70px;
    }
}
</style>
