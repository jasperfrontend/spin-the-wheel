<template>
  <div>
    <header>
      <div class="alert">
        <h1>Find more artists tagged as &ldquo;{{ theTag }}&rdquo;</h1>
        <p>We may do more with this data at any point.</p>
      </div>
    </header>
    <main>
      <TagsList :theTag="tagged" />
    </main>
  </div>
</template>

<script>
import TagsList from "@/components/TagsList.vue";

export default {
  name: "Tag",
  components: {
    TagsList,
  },
  props: ["tag"],
  data() {
    return {
      theTag: this.$route.params.artistName,
    };
  },
};
</script>
