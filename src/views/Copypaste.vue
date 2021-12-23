<template>
  <div>
    <header>
      <div class="alert">
        <h1>Handy dandy list ready to copy</h1>
        <p>If you wanna use this list wherever, you can copy it here.</p>
      </div>
    </header>
    <main>
      <div v-if="loading">
        <Loading />
      </div>
      <div v-else>
        <div class="copy-paste-list" v-for="artist in artists" :key="artist.title">
          {{ artist.title }}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Cosmic from "@/services/cosmic.js";
import Loading from "@/components/Loading.vue";

export default {
  components: {
    Loading,
  },
  name: "Copypaste",
  data() {
    return {
      artists: null,
      loading: true,
    };
  },
  created() {
    const params = {
      query: {
        type: "artists",
      },
      props: "title",
    };
    Cosmic.getEvents(params)
      .then((data) => {
        this.artists = data.objects;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  main {
    padding-left: 1em;
  }
}
</style>
