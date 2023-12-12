import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./Basket.scss";
import BasketItem from "../BasketItem/BasketItem";
import Button from "../Button/Button";

const Basket: React.FC = () => {
  const basketActive = useSelector((state: RootState) => state.basket.active);
  const basketItems = useSelector((state: RootState) => state.basket.items);

  return (
    <AnimatePresence>
      {basketActive && (
        <motion.div
          className="styled-basket"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h3>Your Basket</h3>

          {basketItems.length ? (
            <>
              <div className="basket-items">
                {basketItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <BasketItem product={item} />
                    <div className="break-line" />
                  </React.Fragment>
                ))}
              </div>
              <div className="checkout-button-wrapper">
                <Button text="Go to checkout" primary={true} size="large" />
              </div>
            </>
          ) : (
            <div className="basket-empty">
              <span>Add some items to the basket to proceed</span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Basket;
