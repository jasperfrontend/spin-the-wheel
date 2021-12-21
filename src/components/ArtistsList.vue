<template>
  <div class="artists">
      <div v-for="artist in artists" :key="artist.title">
        <span></span>
        <figure>
          <img :src="artist.thumbnail + '?w=300'" :alt="artist.title">
          <figcaption>{{ artist.title }}</figcaption>
        </figure>
      </div>
  </div>
</template>

<script>
import Cosmic from "@/services/cosmic.js";

export default {
  name: "ArtistsList",
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
      props: "id,title,thumbnail",
    };
    Cosmic.getEvents(params)
      .then((data) => {
        console.log(data.objects);
        this.artists = data.objects;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>