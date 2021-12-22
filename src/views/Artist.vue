<template>
  <div class="artist">
    <div v-if="loading">
      <img src="/loading.gif" alt="Hold on, it's loading..." />
    </div>
    <div v-else>
      <header>
        <h1>{{ artist.title }}</h1>
      </header>
      <main>
        <figure>
          <img :src="artist.thumbnail + '?w=600'" alt="" />
          <figcaption>&copy; {{ artist.title }} - All Rights Reserved</figcaption>
        </figure>
        <div class="artist-tags">
          <div v-for="tag in artist.metadata.artist_categories" :key="tag.id">
            <span>{{ tag.title }}</span>
          </div>
        </div>
        <div class="back-home">
          <router-link to="/">&laquo; Back to overview</router-link>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Cosmic from "@/services/cosmic.js";
export default {
  data() {
    return {
      artist: null,
      loading: true,
    };
  },
  async created() {
    const query = {
      slug: this.$route.params.singleArtist,
    };
    const object = {
      query,
      props: "id,slug,title,thumbnail,metadata.artist_categories",
    };
    await Cosmic.getEvents(object)
      .then((data) => {
        this.artist = data.objects[0];
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
/* .artist {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 65em;
  margin: auto;
} */

.artist a {
  color: inherit;
  text-decoration: none;
}

.artist figure > figcaption {
  padding: 10px;
  font-size: 13px;
}
.artist figure img {
  border-radius: 8px;
  display: block;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.artist-tags div {
  padding: 5px 10px;
  background: lightblue;
  margin: 5px;
  display: inline-block;
  border-radius: 8px;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: bold;
}

.back-home {
  margin-top: 2em;
}

@media (max-width: 768px) {
  .artist figure {
    margin: 0.25em;
  }
  .artist figcaption {
    font-size: 11px;
    padding: 5px;
  }
  .artist figure img {
    border-radius: 8px;
    max-width: 120px;
    height: auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
