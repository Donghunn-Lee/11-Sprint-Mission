import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import ProductCard from './ProductCard';
import { Product } from '../../../types/product';

interface AllProductsProps {
  products: Product[] | undefined;
  onSearch: (keyword: string) => void;
}

function AllProducts({ products, onSearch }: AllProductsProps) {
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >([]);
  const [sortOption, setSortOption] = useState<'recent' | 'favorite'>('recent');

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const sortProducts = (
    products: Product[] | undefined,
    option: 'recent' | 'favorite'
  ): Product[] | undefined => {
    return products?.slice().sort((a, b) => {
      if (option === 'favorite') {
        return b.favoriteCount - a.favoriteCount;
      } else if (option === 'recent') {
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      }
      return 0;
    });
  };

  const sortedProducts = useMemo(() => {
    return sortProducts(filteredProducts, sortOption);
  }, [filteredProducts, sortOption]);

  return (
    <section className='all-products'>
      <div className='all-product-header'>
        <p className='products-caption'>전체 상품</p>
        <div className='all-products-functions'>
          <SearchBar onSearch={onSearch} />
          <Link to='/additem' className='btn add-item-btn'>
            상품 등록하기
          </Link>
          <SortDropdown onSortChange={setSortOption} />
        </div>
      </div>

      <div className='product-list'>
        {(sortedProducts?.length || 0) > 0 ? (
          sortedProducts?.map((product) => (
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
