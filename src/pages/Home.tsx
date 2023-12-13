import React, { useEffect, useRef } from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Basket from "../components/Basket/Basket";
import { useDispatch } from "react-redux";
import { setBasketActive } from "../store/slices/basketSlice";
import ProductList from "../components/ProductList/ProductList";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const basketRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;
    const innerText = targetElement.innerText;

    if (
      innerText !== "Add to basket" &&
      basketRef.current &&
      !basketRef.current.contains(e.target as Node)
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
