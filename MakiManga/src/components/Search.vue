<template>
    <div>
      <h2>Recherche</h2>
      
      <input v-model="searchQuery" placeholder="Rechercher un produit" />
        <button @click="search">Rechercher</button>
  
      <div v-if="searchResults.length > 0">
        <h3>Résultats de la recherche :</h3>
        <ul>
          <li v-for="result in searchResults" :key="result._id">
            {{ result.name }}
          </li>
        </ul>
      </div>
  
      <div v-else>
        <p>Aucun résultat trouvé.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        searchResults: [],
      };
    },
    methods: {
      async search() {
        try {
          // Faites appel à votre API backend avec Axios ou Fetch
          const response = await fetch(`http://localhost:5173/search?query=${this.searchQuery}`);
          const data = await response.json();
  
          this.searchResults = data;
        } catch (error) {
          console.error("Erreur lors de la recherche :", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles CSS spécifiques au composant si nécessaire */
  </style>
  