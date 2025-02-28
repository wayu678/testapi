<template>
  <div v-if="anime">
    <h1>{{ anime.title }}</h1>
    <img :src="anime.images.jpg.image_url" alt="anime.title" />
    <p>{{ anime.synopsis }}</p>
    <button @click="addToCollection">Add to My Collection</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { anime: null };
  },
  methods: {
    async fetchAnime() {
      const id = this.$route.params.id;
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      this.anime = response.data.data;
    },
    addToCollection() {
      let collection = JSON.parse(localStorage.getItem("myCollection")) || [];
      collection.push(this.anime);
      localStorage.setItem("myCollection", JSON.stringify(collection));
      alert("Added to My Collection!");
    },
  },
  mounted() {
    this.fetchAnime();
  },
};
</script>
