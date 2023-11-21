<script>
export default {
  data() {
    return {
      selectedProductType: "Figurines",
      selectedGenre: "action",
      searchTerm: "",
      searchResults: []
    };
  },
  methods: {
    async search() {
      try {
        const response = await fetch(`/api/search?productType=${this.selectedProductType}&genre=${this.selectedGenre}&term=${this.searchTerm}`);
        const data = await response.json();
        this.searchResults = data;
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  }
};
</script>


<template>
  <div class="search-container">
    <div class="search">
      <h4>Nos Licences</h4>
      <p>Recherche</p>
    </div>

    <div class="search-bar">
      <div class="search-inputs">
        <label for="product-type">Type de Produit:</label>
        <select id="product-type" v-model="selectedProductType">
          <option value="Figurines">Figurines</option>
          <option value="Décorations">Décorations</option>
          <option value="Goodies">Goodies</option>
        </select>

        <label for="genres">Genres:</label>
        <select id="genres" v-model="selectedGenre">
          <option value="action">Action</option>
          <option value="drama">Drame</option>
          <option value="comedy">Comédie</option>
        </select>

        <input type="text" placeholder="Recherche..." v-model="searchTerm">
      </div>

      <button @click="search">Rechercher</button>

      <div class="results">
        <ul v-if="searchResults.length > 0">
          <li v-for="result in searchResults" :key="result._id">
            {{ result.name }} - {{ result.genre }}
          </li>
        </ul>
        <p v-else>Aucun résultat trouvé.</p>
      </div>
    </div>

    <div class="content">
      <p v-if="!searchTerm">Veuillez indiquer ce que vous recherchez...</p>
    </div>
  </div>


</template>




<style scoped>
  #app {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100vh;
  }
  .search-container {
    max-width: 1100px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
  }

  .search {
    text-align: center;
    margin-bottom: 20px;
  }

  h4 {
    color: #333;
    font-size: 24px;
    margin: 0;
  }

  p {
    color: #888;
    font-size: 14px;
    text-align: center;
  }
  .search-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
  }

  div.search-bar {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-right: 10px;
    font-weight: bold;
    color: #333;
  }

  select,
  input,
  button {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: #ccc;
    margin-bottom: 10px;
  }

  select {
    margin-right: 20px;
    flex: 1;
  }

  input {
    flex: 1;
  }

  button {
    background-color: #5fc2b9;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #1fa626;
  }

  .content {
    text-align: center;
    color: #555;
  }

  .results {
  margin-top: 10px;
}

  @media screen and (max-width: 768px) {
    .search-bar {
      flex-direction: column;
    }

    select, input, button {
      width: 100%; 
      margin-right: 0;
    }
  }
</style>
