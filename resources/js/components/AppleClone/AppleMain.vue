<template>
    <div>
        <Nav />
        <Section />
        <AppleFooter />
    </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Section from './components/Section.vue'
import AppleFooter from './components/AppleFooter.vue'
export default {
    components: { Nav, Section, AppleFooter },
    name: "AppleMain"
};
</script>

<style lang="scss" scoped>

</style>
