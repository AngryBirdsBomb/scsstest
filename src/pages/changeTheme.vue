<template>
    <div class="hello">
        <input type="button" v-model='selColor' @click="changeColor('theme1')"/>
        <input type="button" v-model='selColor' @click="changeColor('theme2')"/>
        <input type="button" v-model='selColor' @click="changeColor('theme3')"/>
        <p>颜色1颜色1颜色1颜色1颜色1颜色1颜色1颜色1颜色1颜色1颜色1颜色1</p>
        <p>颜色颜色1颜色1颜色1颜色1颜色1颜色1颜色12</p>
    </div>
</template>

<script>
export default {
    name: 'sel-color',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            selColor: '123'
        }
    },
    methods: {
        changeColor (theme) {
            console.log(this.selColor)
            window.document.querySelectorAll('p')[0].setAttribute('data-theme', theme)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './changeThemeMixin.scss';
@import './base.scss';
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
p{
    @include bg_color($background-color-theme1);
}
</style>
