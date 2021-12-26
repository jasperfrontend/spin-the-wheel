<template>
  <div>
    <header>
      <div class="alert">
        <h1>Handy dandy list ready to copy</h1>
        <p>If you wanna use this list wherever, you can copy it here.</p>
      </div>
    </header>
    <main class="spaced">
      <div v-if="loading">
        <Loading height="80px" color="#ffc250" />
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
        let output = data.objects.sort(function (a, b) {
          var titleA = a.title.toUpperCase();
          var titleB = b.title.toUpperCase();
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
        this.artists = output;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
