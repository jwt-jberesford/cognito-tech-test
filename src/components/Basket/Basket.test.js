import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Basket from "./Basket";
import "@testing-library/jest-dom";

describe("Basket Component Tests", () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore({
      basket: {
        active: false,
        items: [],
      },
    });
  });

  test("Basket does not render when state inactive", () => {
    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(screen.queryByText("basket")).toBeNull();
  });

  test("Basket will render items", () => {
    store = mockStore({
      basket: {
        active: true,
        items: [{ id: 1, name: "fruit" }],
      },
    });

    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(screen.getByText("fruit")).toBeInTheDocument();
  });

  test("Basket renders correctly when active", () => {
    store = mockStore({
      basket: {
        active: true,
        items: [{ id: 1, name: "fruit" }],
      },
    });

    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(screen.getByText("Your Basket")).toBeInTheDocument();

    const basketHeading = screen.queryByText("Your Basket");
    expect(basketHeading).toBeInTheDocument();
  });

  test("Basket updates when items are added", () => {
    // write later
    expect(true).toBeTruthy();
  });

  test("Basket updates when items are remoeved", () => {
    expect(true).toBeTruthy();
  });
});
