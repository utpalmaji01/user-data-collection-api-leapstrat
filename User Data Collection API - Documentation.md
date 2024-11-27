
# User Data Collection API - Documentation

## Introduction
This document provides a detailed explanation of the User Data Collection API project. The project includes a Next.js application with a main page, a user list component, and an API route to fetch and filter user data from an external API.

---

## Project Structure
```plaintext
my-next-app/
├── app/
│   ├── api/
│   │   └── users/
│   │       └── route.js
│   ├── components/
│   │   └── UserList.js
│   └── page.js
├── public/
├── styles/
├── node_modules/
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

---

## Main Page (`app/page.js`)

### Description
The main page renders the main heading and the `UserList` component. It uses **Tailwind CSS** for styling.

### Explanation
- **Importing UserList**: The `UserList` component is imported to be used in the main page.
- **Main Container**: The main container is styled to take at least the full height of the viewport and center its content both vertically and horizontally.
- **Main Heading**: Displays the main heading **"User Data Collection"**.
- **UserList Component**: Renders the `UserList` component inside a container with a maximum width of `4xl`.

---

## User List Component (`app/components/UserList.js`)

### Description
The `UserList` component fetches and displays user data from the API. It includes filters for **gender**, **city**, and **country**, as well as pagination controls.

### Explanation
#### States:
- **`users`**: Stores the fetched user data.
- **`filter`**: Stores the filter values for **gender**, **city**, and **country**.
- **`page`** and **`limit`**: Used for pagination control.

#### Effect Hook:
- Calls `fetchUsers` whenever **filter**, **page**, or **limit** changes.

#### `fetchUsers` Function:
- Builds query parameters and makes a GET request to the API.
- Logs parameters and response data for debugging.
- Updates the `users` state with the fetched data.

#### `handleFilterChange` Function:
- Updates the `filter` state with new filter values.
- Logs updated filter values for debugging.

#### `handlePageChange` Function:
- Updates the `page` state to enable pagination.

#### Return JSX:
- Renders filters, user list, and pagination controls.

---

## API Route (`app/api/users/route.js`)

### Description
The API route handles GET requests to the `/api/users` endpoint, fetches user data from an external API, applies filters, and returns the processed data as a JSON response.

---

## Explanation of Key Parts

### Main Page (`page.js`):
- Renders the main heading and the `UserList` component.
- `min-h-screen` ensures the page takes up at least the full height of the viewport.

### User List Component (`UserList.js`):
- Manages the state for **users**, **filters**, and **pagination**.
- Fetches users from the API whenever **filters**, **page**, or **limit** change.
- Displays the filters and user list, with pagination controls.
- Handles filter and page changes, updating the state accordingly.

### API Route (`route.js`):
- Handles GET requests to the `/api/users` endpoint.
- Extracts query parameters from the request URL.
- Makes a request to an external API (`https://randomuser.me/api/`) to fetch user data.
- Applies filters based on query parameters (**gender**, **city**, **country**, **fields**).
- Returns the filtered and processed user data as a JSON response.

---

## Summary
This setup ensures that your application can fetch, filter, and display user data efficiently, with features for filtering, pagination, and debugging.
