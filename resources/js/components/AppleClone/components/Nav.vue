<template>
  <div>
        <nav>
            <ul>
                <li>
                    <a href="#"><i class="apple icon"></i></a>
                </li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Service</a></li>
                <li>
                    <a href="#"><i class="el-icon-search icon"></i></a>
                </li>
                <li>
                    <a href="#"><i class="el-icon-shopping-bag-1 icon"></i></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "roboot", sans-serif;
    text-decoration: none;
}
nav {
    width: 100%;
    height: 48px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        list-style: none;
        display: flex;

        li {
            margin: 0 40px;

            a {
                font-weight: 300;
                color: #adadad;
                transition: 600ms;

                &:hover {
                    color: #f5f5f7;
                }

                .icon {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>
