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
    search() {
      this.searchResults = this.performSearch(
        this.selectedProductType,
        this.selectedGenre,
        this.searchTerm
      );
    },
    performSearch(productType, genre, searchTerm) {
      console.log("Recherche pour", productType, genre, searchTerm);

      return ["resultat 1","...."];
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
      <label for="product-type">Type de Produit:</label>
      <select id="product-type">
        <option value="Figurines">Figurines</option>
        <option value="Décorations">Décorations</option>
        <option value="Goodies">Goodies</option>
      </select>

      <label for="genres">Genres:</label>
      <select id="genres">
        <option value="action">Action</option>
        <option value="drama">Drame</option>
        <option value="comedy">Comédie</option>
      </select>

      <input type="text" placeholder="Recherche...">
      <button>Rechercher</button>

      <div class="results">
        <ul>
          <li v-for="result in searchResults">{{ result }}</li>
        </ul>
      </div>
    </div>

    <div class="content">
      <p>Veuillez indiquer ce que vous recherchez...</p>
    </div>
  </div>

  <main>
    <div class="search-container-2"></div>
  </main>
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
  }

  .search-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
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

  @media screen and (max-width: 768px) {
    .search-bar {
      flex-direction: column; /* Empile les éléments sur petit écran */
    }

    select, input, button {
      width: 100%; 
      margin-right: 0;
    }
  }
</style>
