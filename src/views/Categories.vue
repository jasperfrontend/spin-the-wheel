<template>
  <div>
    <header>
      <div class="alert">
        <h1>The current Spin The Wheel categories</h1>
        <p>Check back regularly for updates.</p>
      </div>
    </header>
    <main class="spaced">
      <div v-if="loading">
        <Loading />
      </div>
      <div v-else>
        <ul class="categories-list">
          <li v-for="cat in categories" :key="cat.title">
            <router-link
              :to="{ name: 'tag', params: { artistID: cat.id, artistName: cat.title } }"
              >{{ cat.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import Cosmic from "@/services/cosmic.js";
import Loading from "@/components/Loading.vue";

export default {
  components: {
    Loading,
  },
  name: "Categories",
  data() {
    return {
      categories: null,
      loading: true,
    };
  },
  created() {
    const params = {
      query: {
        type: "categories",
      },
      props: "id,slug,title",
    };
    Cosmic.getEvents(params)
      .then((data) => {
        this.categories = data.objects;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.categories-list {
  -moz-column-count: 4;
  -moz-column-gap: 20px;
  -webkit-column-count: 4;
  -webkit-column-gap: 20px;
  column-count: 4;
  column-gap: 20px;
  list-style: none;
}
@media (max-width: 1050px) {
  .categories-list {
    -moz-column-count: 2;
    -moz-column-gap: 20px;
    -webkit-column-count: 2;
    -webkit-column-gap: 20px;
    column-count: 2;
    column-gap: 20px;
    list-style: none;
  }
}
</style>
