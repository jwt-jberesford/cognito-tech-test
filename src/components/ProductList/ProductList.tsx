import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductList.scss";
import { NextIcon, PrevIcon } from "../Icons/Icons";

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const gridItemMinWidth = 300; 
  const [itemsPerPage, setItemsPerPage] = useState(15); 

  useEffect(() => {
    const handleResize = () => {
      const gridContainer = document.querySelector(".product-grid");
      const gridContainerWidth = gridContainer
        ? gridContainer.clientWidth
        : window.innerWidth;
      const itemsPerRow = Math.floor(gridContainerWidth / gridItemMinWidth);
      setItemsPerPage(itemsPerRow * 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json"
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setError("Failed to fetch products");
      });
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const getPaginatedData = (): ProductData[] => {
    const startIndex = currentPage * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  };

  const prevPageHandler = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextPageHandler = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <div className="products-wrapper">
      <div className="top-line">
        <h2>Our Products</h2>
        <div className="arrow-wrapper">
          <button
            onClick={prevPageHandler}
            disabled={currentPage === 0}
            className="svg-container"
          >
            <PrevIcon />
          </button>
          <button
            onClick={nextPageHandler}
            disabled={currentPage === totalPages - 1}
            className="svg-container"
          >
            <NextIcon />
          </button>
        </div>
      </div>
      <div className="product-grid">
        {error ? (
          <p>{error}</p>
        ) : (
          getPaginatedData().map((product) => (
            <ProductDetail product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
