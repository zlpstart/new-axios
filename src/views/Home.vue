<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>
      <countTo 
        :startVal="startVal" 
        :endVal="endVal" 
        :duration="3000"
      ></countTo>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import countTo from "vue-count-to";

export default {
  name: "Home",
  data() {
    return {
      startVal: 500,
      endVal: 1000,
    };
  },
  components: {
    HelloWorld,
    countTo,
  },
};
</script>

<style scoped lang="less">
.home {
  p {
    span {
      color: #000;
      font-size: 20px;
    }
  }
}
</style>