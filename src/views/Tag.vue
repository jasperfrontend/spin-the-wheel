<template>
  <div>
    <header>
      <div class="alert">
        <h1>
          Find more artists tagged as <kbd>{{ tagslug }}</kbd>
        </h1>
        <p>We may do more with this data at any point.</p>
      </div>
    </header>
    <main>
      <div v-if="loading">
        <Loading />
      </div>
      <div v-else>
        <div class="artists">
          <div v-for="artist in artists" :key="artist.id">
            <router-link :to="{ name: 'artist', params: { singleArtist: artist.slug } }">
              <figure>
                <img
                  :src="artist.thumbnail + '?fit=crop&w=200&h=200'"
                  :alt="artist.title"
                  :title="artist.title"
                />
                <figcaption>{{ artist.title }}</figcaption>
              </figure>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Cosmic from "@/services/cosmic.js";
// import TagsList from "@/components/TagsList.vue";

export default {
  name: "Tag",
  components: {
    Loading,
  },
  props: {
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
      artists: null,
      loading: true,
    };
  },
  created() {
    const params = {
      query: {
        type: "artists",
        "metadata.artist_categories": this.$route.params.tagid,
      },
      props: "slug,title,thumbnail,metadata",
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
        window.document.title = "Tag: " + this.tagtitle;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
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
