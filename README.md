Party Menu Selection App

This app allows users to select dishes for a party menu by browsing meal categories, filtering dishes, and viewing details. Built with React functional components, React hooks, and react-router-dom for navigation.


1. Menu Categories
Display 4 meal type tabs: Starter, Main Course, Dessert, Sides.

Clicking a tab shows dishes relevant to that category.

2. Dish List
Each dish card shows:

Dish Name

Short Description

Image

Button to Add/Remove the dish

Link/button labeled "Ingredient" to view ingredients

Selected dishes are visually marked.

Selected count updates based on added dishes.

3. Search Functionality
Search bar at the top to filter dishes.

Filters dishes based on dish name (case-insensitive).

Search scope limited to the selected meal category.

4. Veg / Non-Veg Filter
Two toggle filters: Veg and Non-Veg.

Filters dish list immediately based on selected type.

5. Dish Selection Summary
Show count of selected dishes in each category tab.

Display total selected dishes count at the bottom.

Include a "Continue" button (no navigation after clicking).

6. Ingredient Detail Screen
Clicking "Ingredient" navigates to a new screen.

Shows dish name, short description, and ingredient details with quantities (mock data).

Use react-router-dom for navigating between main menu and ingredient detail screens.

Maintain state for selected dishes and filters across navigation.
