import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Basket from "./Basket";
import "@testing-library/jest-dom";

describe("Basket component unit tests", () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore({
      basket: {
        active: false,
        items: [],
      },
      theme: {
        theme: "light",
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
        items: [{ id: 1, name: "apple" }],
      },
      theme: {
        theme: "light",
      },
    });

    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(screen.getByText("apple")).toBeInTheDocument();
  });

  test("Basket renders correctly when active", () => {
    store = mockStore({
      basket: {
        active: true,
        items: [{ id: 1, name: "apple" }],
      },
      theme: {
        theme: "light",
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
    store = mockStore({
      basket: {
        active: true,
        items: [],
      },
      theme: {
        theme: "light",
      },
    });

    const { rerender } = render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(
      screen.queryByText("Add some items to the basket to proceed")
    ).toBeInTheDocument();

    store = mockStore({
      basket: {
        active: true,
        items: [{ id: 1, name: "Apple", price: 1.99, quantity: 1 }],
      },
      theme: {
        theme: "light",
      },
    });

    rerender(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  test("Basket updates when items are removed", () => {
    store = mockStore({
      basket: {
        active: true,
        items: [{ id: 1, name: "Apple", price: 1.99, quantity: 1 }],
      },
      theme: {
        theme: "light",
      },
    });

    const { rerender } = render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(screen.getByText("Apple")).toBeInTheDocument();

    store = mockStore({
      basket: {
        active: true,
        items: [],
      },
      theme: {
        theme: "light",
      },
    });

    rerender(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    // Expect the item to no longer be in the document
    expect(screen.queryByText("Apple")).toBeNull();
  });

  test("Empty basket message appears when no items are present", () => {
    store = mockStore({
      basket: {
        active: true,
        items: [],
      },
      theme: {
        theme: "light",
      },
    });

    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(
      screen.getByText("Add some items to the basket to proceed")
    ).toBeInTheDocument();
  });

  test("Basket component applies the theme correctly", () => {
    store = mockStore({
      basket: {
        active: true,
        items: [{ id: 1, name: "Apple", price: 1.99, quantity: 1 }],
      },
      theme: {
        theme: "dark",
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(container.firstChild).toHaveClass("styled-basket dark");
  });

  test("Basket component renders correctly and matches snapshot", () => {
    store = mockStore({
      basket: {
        active: true,
        items: [{ id: 1, name: "Apple", price: 1.99, quantity: 1 }],
      },
      theme: {
        theme: "light",
      },
    });

    const tree = render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(tree.asFragment()).toMatchSnapshot();
  });
});
