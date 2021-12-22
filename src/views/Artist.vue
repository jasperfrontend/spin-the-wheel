<template>
  <div class="artist">
    <div v-if="loading">
      <div class="loader loader--style1" title="0">
        <svg
          version="1.1"
          id="loader-1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="120px"
          height="120px"
          viewBox="0 0 40 40"
          enable-background="new 0 0 40 40"
          xml:space="preserve"
        >
          <path
            opacity="0.2"
            fill="#000"
            d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
          />
          <path
            fill="#000"
            d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 20 20"
              to="360 20 20"
              dur="0.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
    <div v-else>
      <header>
        <p>
          <small><router-link to="/">&laquo; back</router-link></small>
        </p>
        <h1>{{ artist.title }}</h1>
      </header>
      <main>
        <div class="row">
          <div class="col-first">
            <figure>
              <img
                :src="artist.thumbnail + '?max-h=640&max-h=360&ar=16:9&fit=crop'"
                alt=""
              />
              <figcaption>&copy; {{ artist.title }} - All Rights Reserved</figcaption>
            </figure>
          </div>
          <div class="col-last">
            <div class="artist-tags">
              <div v-for="tag in artist.metadata.artist_categories" :key="tag.id">
                <span>{{ tag.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer-nav">
          <div class="back-home">
            <router-link to="/">&laquo; Back to overview</router-link>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<style scoped>
svg path,
svg rect {
  fill: #ffc250;
}
main {
  margin-bottom: 3em;
}
.row {
  display: flex;
  flex-flow: row nowrap;
}
.artist-tags {
  margin-left: 2em;
  max-width: 25vw;
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
.artist-tags div {
  display: inline-block;
  margin: 0.5em;
  background: rgba(179, 244, 255, 0.7);
  padding: 3px 12px;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
}

@media (max-width: 1050px) {
  .row {
    display: block;
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
        window.document.title = "Artist: " + this.artist.title;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
