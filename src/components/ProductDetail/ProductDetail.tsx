import React from "react";
import "./ProductDetail.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToBasket, setBasketActive } from "../../store/slices/basketSlice";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(setBasketActive(true));
    
    dispatch(
      addToBasket({ id: product.id, name: product.name, price: product.price })
    );
  };

  return (
    <div className="product-detail">
      <h4 className="product-name">{product.name}</h4>
      <p className="product-description">{product.description}</p>

      <p className="product-price">Price: £{product.price}</p>
      <Button
        text="Add to basket"
        primary
        size="small"
        onClick={handleAddToBasket}
      />
    </div>
  );
};

export default ProductDetail;
