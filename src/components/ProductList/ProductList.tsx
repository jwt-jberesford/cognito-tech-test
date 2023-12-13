import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductList.scss";
import { NextIcon, PrevIcon } from "../Icons/Icons";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(15);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const prevButtonDisabled = currentPage === 0;
  const nextButtonDisabled = currentPage >= totalPages - 1;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductData[]>(
          "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const gridContainer = document.querySelector(".product-grid");
      const gridContainerWidth =
        gridContainer?.clientWidth ?? window.innerWidth;
      const gridItemMinWidth = 225;
      const itemsPerRow = Math.floor(gridContainerWidth / gridItemMinWidth);

      setItemsPerPage(itemsPerRow * 3 || 3);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPaginatedData = (): ProductData[] => {
    const startIndex = currentPage * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  };

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="products-wrapper">
      <div className="top-line">
        <h2>Our Products</h2>
        <div className="arrow-wrapper">
          <button
            onClick={() => changePage(Math.max(currentPage - 1, 0))}
            disabled={prevButtonDisabled}
            className="svg-container"
          >
            <PrevIcon theme={theme} disabled={prevButtonDisabled} />
          </button>
          <button
            onClick={() =>
              changePage(Math.min(currentPage + 1, totalPages - 1))
            }
            disabled={nextButtonDisabled}
            className="svg-container"
          >
            <NextIcon theme={theme} disabled={nextButtonDisabled} />
          </button>
        </div>
      </div>
      <div className="product-grid">
        {getPaginatedData().map((product) => (
          <ProductDetail product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
