import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateItemQuantity,
  removeFromBasket,
} from "../../store/slices/basketSlice";
import "./BasketItem.scss";
import { NextIcon, PrevIcon } from "../Icons/Icons";
import { RootState } from "../../store/store";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface BasketItemProps {
  product: Product;
}

const BasketItem: React.FC<BasketItemProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const dispatch = useDispatch();
  const totalPrice = (product.price * quantity).toFixed(2);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    dispatch(updateItemQuantity({ id: product.id, quantity: newQuantity }));
  };

  const handleIncrease = () => {
    if (quantity < 999) {
      handleQuantityChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  const handleRemove = () => {
    dispatch(removeFromBasket(product.id));
  };

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  const isDecreaseDisabled = quantity <= 1;
  const isIncreaseDisabled = quantity >= 999;

  return (
    <div className="item-wrapper">
      <h4 className="item-name">{product.name}</h4>
      <div className="item-right">
        <p className="item-price">£{totalPrice}</p>

        <div className="item-quantity">
          <button
            onClick={handleDecrease}
            disabled={isDecreaseDisabled}
            className="prev-button"
          >
            <div className="svg-container">
              <PrevIcon disabled={isDecreaseDisabled} theme={theme} />
            </div>
          </button>
          <span>{quantity}</span>
          <button
            onClick={handleIncrease}
            disabled={isIncreaseDisabled}
            className="next-button"
          >
            <div className="svg-container">
              <NextIcon disabled={isIncreaseDisabled} theme={theme} />
            </div>
          </button>
        </div>

        <button
          onClick={handleRemove}
          className={`remove-item ${theme}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
