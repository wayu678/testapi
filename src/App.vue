<template>
  <div>
    <h1 class="title">Anime List</h1>
    <input
      v-model="searchQuery"
      @input="searchAnime"
      placeholder="Search anime..."
      class="search-box"
    />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/MyCollection">My Collection</router-link>
      <router-link to="/animedetail">amime</router-link>
    </nav>

    <div class="anime-list">
      <div v-for="anime in animeList" :key="anime.mal_id" class="anime-card">
        <img :src="anime.images.jpg.image_url" alt="anime.title" />
        <h3>{{ anime.title }}</h3>
        <router-link :to="`/anime/${anime.mal_id}`">View Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      animeList: [],
      searchQuery: "",
    };
  },
  methods: {
    async fetchAnime() {
      const response = await axios.get("https://api.jikan.moe/v4/anime");
      this.animeList = response.data.data;
    },
    async searchAnime() {
      if (this.searchQuery.length > 2) {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${this.searchQuery}`
        );
        this.animeList = response.data.data;
      } else {
        this.fetchAnime();
      }
    },
  },
  mounted() {
    this.fetchAnime();
  },
};
</script>

<style>
.title {
  text-align: center;
}
.search-box {
  display: block;
  margin: 10px auto;
  padding: 5px;
}
.anime-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.anime-card {
  width: 200px;
  margin: 10px;
  text-align: center;
}
.anime-card img {
  width: 100%;
  border-radius: 10px;
}
</style>
