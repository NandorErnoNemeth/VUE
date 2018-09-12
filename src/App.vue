<template>
  <div id="app">
    <HelloWorld msg="Hello World!"/>
    <HelloWorldPlus/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorldPlus from "./components/HelloWorldPlus.vue";

@Component({
  components: {
    HelloWorld,
    HelloWorldPlus
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
