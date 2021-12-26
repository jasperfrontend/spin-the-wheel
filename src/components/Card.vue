<template>
  <figure>
    <img :src="cardsrc" :alt="cardalt" :title="cardtitle" />
    <figcaption>{{ cardtitle }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardsrc: {
      type: String,
      required: true,
    },
    cardalt: {
      type: String,
      required: true,
    },
    cardtitle: {
      type: String,
      required: true,
    },
  },
};
</script>
