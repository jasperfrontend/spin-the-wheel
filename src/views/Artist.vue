<template>
  <div class="artist">
    <div v-if="loading">
      <Loading height="80px" color="#ffc250" />
    </div>
    <div v-else>
      <header>
        <p>
          <small><router-link to="/">&laquo; back</router-link></small>
        </p>
        <h1>{{ artist.title }}</h1>
      </header>
      <main class="spaced">
        <div class="row">
          <div class="col-first">
            <figure>
              <img :src="artist.thumbnail + '?w=640'" alt="" />
              <figcaption>&copy; {{ artist.title }} - All Rights Reserved</figcaption>
            </figure>
          </div>
          <div class="col-last">
            <div class="artist-tags">
              <h2>Tags for {{ artist.title }}</h2>
              <div
                class="tag"
                v-for="tag in artist.metadata.artist_categories"
                :key="tag.slug"
              >
                <router-link
                  :to="{
                    name: 'tag',
                    params: { tagslug: tag.slug, tagtitle: tag.title, tagid: tag.id },
                  }"
                >
                  <span>{{ tag.title }}</span>
                </router-link>
              </div>
            </div>
            <div class="artist-tags artist-jokers">
              <h2>Possible Jokers for {{ artist.title }}</h2>
              <ul class="joker-list">
                <li v-for="joker in artist.metadata.jokers.split('\n')" :key="joker.id">
                  <span>{{ joker }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="back-home">
          <router-link to="/">&laquo; Back to overview</router-link>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-flow: row nowrap;
}
.artist-tags {
  margin-left: 2em;
  max-width: 25vw;
}
.artist-tags a {
  color: inherit;
  text-decoration: none;
}
.artist-tags div.tag:hover {
  background-color: #044247;
  color: #fff;
}
figure {
  width: 640px;
}
figure img {
  display: block;
}
figcaption {
  background: #eaeaea;
  font-size: 11px;
  font-style: italic;
  padding: 5px;
  margin-bottom: 1em;
}
.artist-tags div.tag {
  display: inline-block;
  margin: 0.5em 1em 0.5em 0;
  background: rgba(179, 244, 255, 0.7);
  padding: 3px 12px;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
}
.back-home {
  margin-top: 1em;
}
.artist-jokers {
  margin-top: 2em;
}
.joker-list {
  margin-top: 0.5em;
  margin-left: 15px;
}

@media (max-width: 1050px) {
  .row {
    display: block;
  }
  figure {
    width: auto;
  }
  img {
    width: 100%;
    height: auto;
  }
  .artist-tags {
    margin-left: 0;
    max-width: 100%;
  }
}
</style>

<script>
import Cosmic from "@/services/cosmic.js";
import Loading from "@/components/Loading.vue";

export default {
  components: {
    Loading,
  },
  props: {
    height: {
      type: String,
      required: true,
    },
    tagtitle: {
      type: String,
      required: true,
    },
    tagid: {
      type: String,
      required: true,
    },
    tagslug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      artist: null,
      loading: true,
    };
  },
  created() {
    const query = {
      slug: this.$route.params.singleArtist,
    };
    const object = {
      query,
      props: "id,slug,title,thumbnail,metadata.artist_categories,metadata.jokers",
    };
    Cosmic.getEvents(object)
      .then((data) => {
        this.artist = data.objects[0];
        this.loading = false;
        this.jokers = window.document.title = "Artist: " + this.artist.title;
      })
      .catch((error) => {
        this.artist = {
          thumbnail: "//jasper.monster/sharex/forbidden.png",
          title: "No results",
          error: error.message,
          slug: error.status,
          metadata: {
            artist_categories: null,
            jokers: "not found",
          },
        };
        this.loading = false;
      });
  },
};
</script>
