<template>
  <div id="app">
    <nav>
      <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/videos">Videos Diversos</router-link>
    </ul>
    </nav>
    <router-view></router-view>
  </div>
  <div id="app">
    <HelloWorld />
  </div>
  <div id="app">
    <TabelaDiversos />
  </div>
  
</template>

<script>
import HelloWorld from './components/PaginaPrincipal.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}


</script>

<style>

nav{
  width: 100%;
  background: rgb(75, 88, 202);
  margin: 0%
}

ul{
  display: flex;
  padding: 2rem;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer !important;
}

a{
  text-decoration: none;
  color: blue;
}

</style>
