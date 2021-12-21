<template>
  <div class="artists">
    <div v-for="artist in artists" :key="artist.title">
      <figure>
        <img :src="artist.thumbnail + '?fit=crop&w=200&h=200&border=4,FFFFFF&border-radius-inner=8,8,8,8&border-radius=8,8,8,8'" :alt="artist.title">
        <figcaption>{{ artist.title }}</figcaption>
        <div class="overlay"><span v-html="artist.content"></span></div>
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
      props: "id,title,content,thumbnail",
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
}
.artists figure {
  padding: 1em;
  margin: 1em;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(15,15,15,.15);
  position: relative;
}
.artists figure img {
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.overlay {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  margin: auto;
  background: rgba(224, 147, 3, .9);
  padding: .5em 1em;
  font-weight: bold;
  color: #fff;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 80%;
}

.artists figure:hover .overlay, .artists figure:active .overlay {
  display: block;
  animation: fadeIn 300ms ease;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    margin-top: -1em;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  .artists figure img {
    border-radius: 8px;
    max-width: 120px;
    height: auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}


</style>