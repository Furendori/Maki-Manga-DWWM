<script setup lang="ts">
import { onMounted, ref } from "vue";
import { MangaRepository } from "../repositories/MangaRepository";

const mangas = ref([]);
const isLoading = ref(true);

const repo: MangaRepository = new MangaRepository();

const getMangas = async () => {
  mangas.value = await repo.getAllMangas();
  isLoading.value = false;
};

onMounted(() => {
  getMangas();
});
</script>

<template>
  <h2>Les licenses</h2>
  <div class="main-container" v-for="manga in mangas">
    <div class="mangas-infos">
      <img :src="manga['image']" alt="" />
      <div>
        <p>{{ manga["nameFR"] }}</p>
        <p>({{ manga["nameJP"] }})</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
}
</style>
