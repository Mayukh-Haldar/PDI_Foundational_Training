const products = [
  { name: "T-Shirt", category: "Clothing" },
  { name: "Laptop", category: "electronics" },
  { name: "CoFFee Mug", category: "Kitchen" },
  { name: "Headphones", category: "electronics" },
];
function searchProducts(query) {
    const searchText = query.toLowerCase();
    return products.filter(function (product) {
        const productName = product.name.toLowerCase();
        const productCategory = product.category.toLowerCase();
        const nameMatches = productName.includes(searchText);
        const categoryMatches = productCategory.includes(searchText);
        return nameMatches || categoryMatches;
    });
}
console.log(searchProducts("lap"));       
console.log(searchProducts("ELECTRONICS")); 
console.log(searchProducts("coffee"));    
