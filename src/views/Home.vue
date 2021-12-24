<template>
  <div>
    <header>
      <div class="alert">
        <h1>Welcome to Spin The Wheel Song Requests</h1>
        <p>These are the current artists on the 'Artists Edition' wheel!</p>
      </div>
    </header>
    <main>
      <ArtistsList />
    </main>
  </div>
</template>

<script>
import ArtistsList from "@/components/ArtistsList.vue";

export default {
  name: "Home",
  components: {
    ArtistsList,
  },
};
</script>
