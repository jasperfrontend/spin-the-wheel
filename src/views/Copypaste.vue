<template>
  <div>
    <header>
      <div class="alert">
        <h1>Handy dandy list ready to copy</h1>
        <p>If you wanna use this list wherever, you can copy it here.</p>
      </div>
    </header>
    <main>
      <div class="copy-paste-list" v-for="artist in artists" :key="artist.title">
        {{ artist.title }}
      </div>
    </main>
  </div>
</template>

<script>
import Cosmic from "@/services/cosmic.js";

export default {
  name: "Copypaste",
  data() {
    return {
      artists: null,
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
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
