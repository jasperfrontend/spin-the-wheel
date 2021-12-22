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
          <img :src="artist.thumbnail + '?w=900'" alt="" />
          <figcaption>&copy; {{ artist.title }} - All Rights Reserved</figcaption>
        </figure>
        <div v-for="tag in artist.metadata.artist_categories" :key="tag.id">
          <span>{{ tag.title }}</span>
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
.artists {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.artists a {
  color: inherit;
  text-decoration: none;
}
.artists figure {
  padding: 0;
  margin: 1em;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(15, 15, 15, 0.15);
  position: relative;
  flex-grow: 0;
  word-wrap: break-word;
}
.artists figure > figcaption {
  padding: 10px;
  font-size: 13px;
}
.artists figure img {
  border-radius: 8px;
  display: block;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media (max-width: 768px) {
  .artists figure {
    margin: 0.25em;
  }
  .artists figcaption {
    font-size: 11px;
    padding: 5px;
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
