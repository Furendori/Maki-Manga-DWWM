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
      // logique de recherche
      console.log("Recherche pour", productType, genre, searchTerm);

      return ["resultat 1","...."];
    }
  }
};
</script>