<template>
  <div class="app-container">
    <Topbar />
    <router-view/>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
export default {
  name: 'App',
  components: {
    Topbar
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
}
a {
  color: #7CA1BC;
}
.app-container {
  max-width: 100vw;
}

header {
  padding: 1em 1em 0;
}
</style>
