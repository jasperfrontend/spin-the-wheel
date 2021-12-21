<template>
  <div class="app-container">
    <Topbar />
    <header>
      <h1>Welcome to Spin The Wheel Song Requests</h1>
      <p>These are the current artists on the 'Artists Edition' wheel. Hover over each artist to reveal the current joker for that artist. A joker is a track that cannot be requested whenever the joker is active in-game. <img src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a836642d803c45c9ab1389d6f45cc590/default/dark/1.0" alt=""></p>
    </header>
    <main>
      <ArtistsList/>
    </main>
  </div>
</template>

<script>
import ArtistsList from '@/components/ArtistsList.vue'
import Topbar from '@/components/Topbar.vue'
export default {
  name: 'App',
  components: {
    ArtistsList,
    Topbar
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;700&display=swap');
*,*:before,*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
