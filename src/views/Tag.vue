<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <header>
        <div class="alert">
          <h1>
            Find more artists tagged as <kbd>{{ pagetitle.title }}</kbd>
          </h1>
        </div>
        <p>We may do more with this data at any point.</p>
      </header>
    </div>
    <div v-if="loadingmain">
      <Loading />
    </div>
    <div v-else>
      <main>
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
      </main>
    </div>
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

  data() {
    return {
      artists: null,
      loading: true,
      loadingmain: true,
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
        this.loadingmain = false;
      })
      .catch((error) => {
        console.log(error);
      });
    const tagdata = {
      query: {
        type: "categories",
        id: this.$route.params.tagid,
      },
      props: "id,slug,title",
    };
    Cosmic.getEvents(tagdata)
      .then((returndata) => {
        this.pagetitle = returndata.objects[0];
        window.document.title = "Tag: " + this.pagetitle.title;
        this.loading = false;
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
