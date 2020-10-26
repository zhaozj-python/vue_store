<template>
  <div id="app">
    <h3>百知教育信息管理系统</h3>
    <hr>
    <router-link to="/first">访问首页</router-link>
    <router-link to="/second">访问用户页</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  import First from "./components/First";
  import Second from "./components/Second";

  export default {
    name: 'App',
    components:{
      First: First,
      Second: Second
    }

  }
</script>

<style>

</style>
