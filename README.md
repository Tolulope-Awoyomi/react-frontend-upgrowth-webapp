# UpGrowth App (Frontend)

Welcome to the frontend of the **UpGrowtht** application. This project aims to provide a user-friendly interface for managing aspects of our lives with specific strategies, allowing users to create, read, update, and delete items efficiently. By integrating React for the frontend and using a Sinatra API for the backend, I've created a robust platform for managing hierarchical data.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Integration with Backend](#integration-with-backend)
- [Frontend State Management](#frontend-state-management)
- [RESTful Routes](#restful-routes)
- [Optimal Backend Usage](#optimal-backend-usage)
- [Requirements Fulfilled](#requirements-fulfilled)
- [Usage](#usage)
- [Contributing](#contributing)

## Getting Started

To get started with the frontend, follow these steps:

1. **Clone the repository:** First, clone this repository to your local machine.

```bash
git clone <repository-url>
cd aspects-strategies-frontend
```

2. **Install Dependencies:** Use npm or yarn to install the required dependencies.

```bash
npm install
```

3. **Start the Development Server:** Start the development server to preview the frontend.

```bash
npm start
```

4. **Access the Application:** Once the development server is running, you can access the application in your browser at `http://localhost:3000`.

## Project Structure

Here's a brief overview of the project structure:

- **`public/`:** This directory contains the public assets, including the HTML file where the React app is mounted.
- **`src/`:** The main source code directory where the React components, services, styles, and other application logic reside.
  - **`components/ & containers/`:** Contains React components that make up the UI of the application.
  - **`services/`:** Provides API services to communicate with the backend Sinatra server.
  - **`styles/`:** Holds the styling files, such as CSS or SCSS.
  - **`App.js`:** The main application component where the routing (derived from BrowerRouter imported in `index.js`) and high-level structure are defined.
  - **`logo.svg`:** The designed logo for the app. 

## Integration with Backend

The frontend of this application works in conjunction with the provided backend Sinatra API, which offers endpoints for managing aspects and strategies. Please ensure that you have the backend server up and running and properly configured before using this frontend. The backend API endpoints are as follows:

- **GET `/aspects`:** Retrieves a list of all aspects with their associated strategies.
- **POST `/aspects`:** Creates a new aspect on the server, allowing you to specify the aspect's name.
- **GET `/strategies`:** Retrieves a list of all strategies.
- **POST `/strategies`:** Creates a new strategy on the server, allowing you to specify the strategy's name and associated aspect.
- **PATCH `/strategies/:id`:** Updates the name of a specific strategy.
- **DELETE `/strategies/:id`:** Deletes a specific strategy.

Please ensure that the backend API is reachable from the frontend. You might need to update the API URLs in the frontend services if necessary.

## Frontend State Management

Proper front end state management is crucial for this application. It's essential to update state using a `setState` function after receiving responses from POST, PATCH, or DELETE requests. Avoid relying on GET requests to update state directly.

## RESTful Routes

The application follows RESTful conventions for defining routes. The routes are designed to be intuitive and aligned with CRUD operations.

## Optimal Backend Usage

The frontend optimally uses the backend by passing JSON for related associations from the back end to the front end. Active Record methods are used in the controller to grab the necessary data from the database and provide it as JSON to the front end. There's no reliance on filtering front end state or separate fetch requests to retrieve related data.

## Requirements Fulfilled

This project fulfills the following requirements:

- Utilizes Active Record to interact with a database.
- Implements at least two models (aspects and strategies) with a one-to-many relationship.
- Provides create and read actions for both models.
- Implements full CRUD capability for the strategies model, including a form for the update action.
- Uses proper front end state management with `setState`.
- Follows good OO design patterns with separate classes for models.
- Adheres to RESTful conventions for routes.
- Passes JSON for related associations from the backend.

## Usage

Once both the frontend and backend are running, you can access the aspects and strategies management application by opening `http://localhost:3000` in your web browser. You can manage aspects and strategies seamlessly through the user interface.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to open issues or submit pull requests. Please follow the existing code style and provide clear commit messages.

