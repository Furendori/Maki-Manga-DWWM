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
          // Faites appel à votre API backend avec Fetch
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
  
