import React, { useEffect, useRef } from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Basket from "../components/Basket/Basket";
import { useDispatch } from "react-redux";
import { setBasketActive } from "../store/slices/basketSlice";
import ProductList from "../components/ProductList/ProductList";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const basketRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      basketRef.current &&
      !basketRef.current.contains(event.target as Node)
    ) {
      dispatch(setBasketActive(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [basketRef]);

  return (
    <PrimaryLayout>
      <div ref={basketRef}>
        <Basket />
      </div>
      <ProductList />
    </PrimaryLayout>
  );
};

export default Home;
