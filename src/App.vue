<template>
  <div class="app-container">
    <Topbar />
    <router-view />
    <footer class="site-footer">
      <p>Website &copy; 2021-2022 RadioJasper. These images are not mine.</p>
    </footer>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
export default {
  name: "App",
  components: {
    Topbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;700&display=swap");
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  margin-bottom: 3em;
}
#app {
  font-family: "Poppins", sans-serif;
  color: #2c3e50;
}
a {
  color: #7ca1bc;
}
.alert {
  background: #b1ffc5;
  color: #155724;
  border-left: 3px solid #709969;
  padding: 0.5em 1em;
  margin: 1em 0;
}
.alert h1 {
  font-size: 24px;
  font-weight: 600;
}
.app-container {
  max-width: 100vw;
}

header,
footer {
  padding: 1em;
}
main:not(.spaced) {
  padding: 0 0 5em;
}
main.spaced {
  padding: 0 1em 5em;
}
footer.site-footer {
  font-size: 11px;
  background: rgba(4, 66, 71, 0.8);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  color: #fff;
}

@media (max-width: 768px) {
  main:not(.spaced) {
    padding: 0;
  }
}
</style>
