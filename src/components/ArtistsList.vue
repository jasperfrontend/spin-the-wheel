<template>
  <div v-if="loading">
    <Loading height="80px" color="#ffc250" />
  </div>
  <div v-else>
    <div class="artists">
      <div v-for="artist in artists" :key="artist.slug">
        <router-link :to="{ name: 'artist', params: { singleArtist: artist.slug } }">
          <Card
            :cardsrc="artist.thumbnail + '?fit=crop&w=200&h=200'"
            :cardalt="artist.title"
            :cardtitle="artist.title"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Cosmic from "@/services/cosmic.js";
import Loading from "@/components/Loading.vue";
import Card from "@/components/Card.vue";

export default {
  name: "ArtistsList",
  components: {
    Loading,
    Card,
  },
  props: {
    cardsrc: {
      type: String,
      required: true,
    },
    cardalt: {
      type: String,
      required: true,
    },
    cardtitle: {
      type: String,
      required: true,
    },
  },
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
      props: "id,slug,title,thumbnail",
      sort: "title",
    };
    Cosmic.getEvents(params)
      .then((data) => {
        // sort by name
        let output = data.objects.sort(function (a, b) {
          var slugA = a.slug.toUpperCase();
          var slugB = b.slug.toUpperCase();
          if (slugA < slugB) {
            return -1;
          }
          if (slugA > slugB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
        this.artists = output;
        this.loading = false;
      })
      .catch((error) => {
        this.artists = [
          {
            thumbnail: "//jasper.monster/sharex/forbidden.png",
            title: "No results",
            error: error,
            slug: error.status,
          },
        ];
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
    margin: 0.25em;
  }
  .artists figure figcaption {
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
