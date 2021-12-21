<template>
  <div>
    <header>
      <h1>Welcome to Spin The Wheel Song Requests</h1>
      <p>These are the current artists on the 'Artists Edition' wheel!</p>
    </header>
    <main>
      <ArtistsList/>
    </main>
  </div>
</template>

<script>
import ArtistsList from '@/components/ArtistsList.vue'

export default {
  name: 'Home',
  components: {
    ArtistsList
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
