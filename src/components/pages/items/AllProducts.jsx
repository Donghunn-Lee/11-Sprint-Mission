import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import ProductCard from "./ProductCard";

function AllProducts({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("recent");

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    const sortProducts = (products, option) => {
      return products.slice().sort((a, b) => {
        if (option === "favorite") {
          return b.favoriteCount - a.favoriteCount;
        } else if (option === "recent") {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        } else {
          return 0;
        }
      });
    };

    const sorted = sortProducts(filteredProducts, sortOption);
    setSortedProducts(sorted);
  }, [filteredProducts, sortOption]);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <section className="all-products">
      <div className="all-product-header">
        <p className="products-caption">전체 상품</p>
        <div className="all-products-functions">
          <SearchBar
            onSearch={handleSearch}
            setFilteredProducts={setFilteredProducts}
          />
          <Link to="/additem" className="btn add-item-btn">
            상품 등록하기
          </Link>
          <SortDropdown onSortChange={setSortOption} />
        </div>
      </div>

      <div className="product-list">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p>상품이 없습니다.</p>
        )}
      </div>
    </section>
  );
}

export default AllProducts;
