# [Dartcook](https://dartcook.onrender.com/)

Dartcook is a vibrant recipe-sharing platform designed to connect culinary enthusiasts from around the globe. Built as part of a development challenge, it utilizes TheMealDB API to fetch a variety of recipes which users can browse, edit, and discuss. Dartcook turns everyday cooking into a shared experience by allowing users to discover new recipes, share their own culinary creations, and interact with a community of food lovers.

## Features

- **Explore Recipes**: Discover recipes from different cuisines and learn how to make them.
- **Create Recipes**: Users can contribute their recipes to the platform.
- **Edit and Delete Recipes**: Manage and update recipe details or remove them if needed.
- **Search Functionality**: Quickly find recipes by name or ingredients.
- **Responsive UI**: Accessible on both desktop and mobile devices.
- **TheMealDB API**: Interaction with TheMealDB API. Since it doesn't support delete/new posts, that is implemented via localstorage.

## Technologies Used

- **React**: For building the user interface.
- **Zustand**: For state management across the application.
- **Axios**: Used for API requests to TheMealDB.
- **Tailwind CSS**: For styling and designing a responsive layout.

## Project Structure

- `src/components`: Contains all the React components used in the project.
  - `App.jsx`: The main React component that includes routing and layout structure.
  - `EditModal`: A modal editing component used to edit posts in NewPost and Post.
  - `NavBar`: A navbar that redirects you to Home and New post
  - `Post`: Allows you to view a specific post with more details by redirecting you to its mealID
  - `Posts`: The main page that hosts all the posts fetched from the API, and ones that are locally created/deleted
  - `SearchBar`: A component that allows you to search and filter for certain cooking recipes
- `src/store`: Includes the Zustand store setup which manages the global state.
- `src/main`: The main file that renders the app foor React

## Local Development

Follow these steps to set up Dartcook for local development:

1. Clone the repository:
   ```bash
   git clone https://github.com/sajjad-source/Dartcook.git
   cd dartcook
   ```
2. Install dependencies:
  ```bash
  npm install
  ```

3. Start the development server
  ```bash
  npm run dev 
  ```

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests/issues are warmly welcome.

## Acknowledgements
Thanks to TheMealDB for providing the free API that powers the core functionality of this project.
