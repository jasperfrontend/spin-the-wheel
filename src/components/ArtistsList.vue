<template>
  <div class="artists">
    <div v-for="artist in artists" :key="artist.title">
      <figure>
        <img :src="artist.thumbnail + '?fit=crop&w=200&h=200'" :alt="artist.title">
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
      artists: null
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
        this.artists = data.objects;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>

.artists {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.artists figure {
  padding: 0;
  margin: 1em;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(15,15,15,.15);
  position: relative;
}
.artists figure figcaption {
  padding: 10px;
}
.artists figure img {
  border-radius: 8px;
  display: block;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media (max-width: 768px) {
.artists figure {
  margin: .25em;
}
.artists figure figcaption {
  font-size: 11px;
}
.artists figure img {
    border-radius: 8px;
    max-width: 120px;
    height: auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}


</style>