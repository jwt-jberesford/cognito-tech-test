import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateItemQuantity,
  removeFromBasket,
} from "../../store/slices/basketSlice";
import "./BasketItem.scss";
import { NextIcon, PrevIcon } from "../Icons/Icons";

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
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();
  const totalPrice = (product.price * quantity).toFixed(2);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    dispatch(updateItemQuantity({ id: product.id, quantity: newQuantity }));
  };

  const handleIncrease = () => handleQuantityChange(quantity + 1);

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

  return (
    <div className="item-wrapper">
      <h4 className="item-name">{product.name}</h4>
      <div className="item-right">
        <p className="item-price">Price: £{totalPrice}</p>

        <div className="item-quantity">
          <button
            onClick={handleDecrease}
            className="prev-button"
            aria-label="Decrease quantity"
          >
            <div className="svg-container">
              <PrevIcon />
            </div>
          </button>
          <span>{quantity} </span>
          <button
            onClick={handleIncrease}
            className="next-button"
            aria-label="Increase quantity"
          >
            <div className="svg-container">
              <NextIcon />
            </div>
          </button>
        </div>

        <button
          onClick={handleRemove}
          className="remove-item"
          aria-label="Remove item"
        >
          <div className="svg-container">Remove</div>
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
