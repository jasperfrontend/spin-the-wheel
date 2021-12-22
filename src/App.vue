<template>
  <div class="app-container">
    <Topbar />
    <router-view />
    <footer>
      <p>
        &copy; 2021-2022 RadioJasper. All images are subject to copyright by their
        respective holder(s). If you have any questions or remarks, please contact
        <a href="mailto:jaspervdmeer@gmail.com">jaspervdmeer@gmail.com</a> or submit a
        <a href="https://github.com/jasperfrontend/spin-the-wheel/pulls" target="_blank"
          >Pull Request on Github</a
        >.
      </p>
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
main {
  padding: 0 1em 1em;
}
footer {
  font-size: 80%;
}

@media (max-width: 768px) {
  main {
    padding: 0;
  }
}
</style>
