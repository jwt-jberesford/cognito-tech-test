# Cognito Supermarket App

Cognito Supermarket App is a React-based web application designed for a basic supermarket experience, allowing users to view products, manage a shopping basket, and browse product details.

## Features

- **Product Listing:** Displays a list of products fetched from an external API.
- **Product Details:** Users can view detailed information about each product.
- **Shopping Basket:** Functionality to add products to a shopping basket and view them.
- **Responsive Design:** The app is responsive and works well on both desktop and mobile devices.
- **State Management:** Implemented with Redux, ensuring a consistent and predictable state throughout the app.
- **Unit Testing:** Components are tested using Jest and React Testing Library. The unit tests for the Basket component can be found in `src/components/Basket/Basket.test.js`.

## Installation

Clone the repository and navigate to the project directory. Then run the following command to install dependencies:

```bash
npm install
```

## Running the application

To start the application, run:

```bash
npm run start
```

This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

## Running tests

To test the application, run:

```bash
npm run test
```

## Built with

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A state management tool for JavaScript apps.
- **Axios:** A promise-based HTTP client for making HTTP requests.
- **Styled Components & SASS:** For styling the application components and enabling responsive design.
- **Jest & React Testing Library:** Used for writing unit tests for the React components.

## Acknowledgements

Thanks to Cognito for providing the technical assessment.
