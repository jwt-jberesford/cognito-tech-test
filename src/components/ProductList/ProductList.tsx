import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(0);
  const tempData: ProductData[] = [
    {
      id: 1,
      name: "Gala Apples (5 lbs)",
      description: "Crisp and delicious apples for a healthy snack.",
      price: 3.49,
    },
    {
      id: 2,
      name: "UK-Grade Ground Beef (1 lb)",
      description: "High-quality ground beef for your favorite recipes.",
      price: 5.99,
    },
    {
      id: 3,
      name: "Organic Milk (1 gallon)",
      description: "Nutrient-rich organic milk for the family.",
      price: 1.99,
    },
    {
      id: 4,
      name: "Fresh Broccoli (per bunch)",
      description: "Tender broccoli for steaming or roasting.",
      price: 1.49,
    },
    {
      id: 5,
      name: "Free-Range Large Eggs (dozen)",
      description: "Farm-fresh eggs for your morning omelette.",
      price: 2.29,
    },
    {
      id: 6,
      name: "Wholemeal Bread (loaf)",
      description: "Nutrient-packed wholemeal bread for sandwiches.",
      price: 1.79,
    },
    {
      id: 7,
      name: "Scottish Salmon Fillet (per lb)",
      description: "Delicious salmon fillet for a healthy dinner.",
      price: 12.99,
    },
    {
      id: 8,
      name: "Bananas (per lb)",
      description: "Sweet and ripe bananas for snacking.",
      price: 0.89,
    },
    {
      id: 9,
      name: "Fresh Spinach (per bunch)",
      description: "Leafy spinach for salads or sautéing.",
      price: 1.99,
    },
    {
      id: 10,
      name: "Orange Juice (1 litre)",
      description: "Freshly squeezed orange juice for a vitamin C boost.",
      price: 1.99,
    },
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(tempData.length / itemsPerPage);

  const getPaginatedData = (): ProductData[] => {
    const startIndex = currentPage * itemsPerPage;
    return tempData.slice(startIndex, startIndex + itemsPerPage);
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
        {getPaginatedData().map((product) => (
          <ProductDetail product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
