<template>
  <div>
    <header>
      <div class="alert">
        <h1>
          Find more artists tagged as &ldquo;{{ this.$route.params.artistName }}&rdquo;
        </h1>
        <p>We may do more with this data at any point.</p>
      </div>
    </header>
    <main>
      <TagsList />
    </main>
  </div>
</template>

<script>
import TagsList from "@/components/TagsList.vue";
import artistName from "@/views/Artist.vue";

export default {
  name: "Home",
  components: {
    TagsList,
  },
  props: {
    artistName,
  },
};
</script>
