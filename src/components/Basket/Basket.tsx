import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./Basket.scss";
import BasketItem from "../BasketItem/BasketItem";

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
          <div className="basket-items">
            {basketItems.map((item) => (
              <BasketItem key={item.id} product={item} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Basket;
