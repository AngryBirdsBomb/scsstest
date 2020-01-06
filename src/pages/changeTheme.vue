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
            selColor: '切换主题'
        }
    },
    methods: {
        changeColor (theme) {
            console.log(this.selColor)
            window.document.querySelector('.hello').setAttribute('data-theme', theme)
        },
        e () {
            var express = require('express')
            console.log(express)
        }
    },
    mounted () {
        this.e()
        this.$http.get('http://127.0.0.1:8888/api',
        {
            name: '11'
        }).then((res) => {
            console.log(res)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
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
