# User Management Dashboard

## Project Overview

UserManager is a React SPA designed for managing a user list with features to add, edit, and delete users.

---

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

---

## Description

This project demonstrates proficiency with React, Redux, and modern frontend development tools.  
It enables user management: viewing the list, editing user details, deleting users, and saving changes.

---

## Technologies

- React 18
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios (for API requests)
- Jest & React Testing Library (for testing)

---

## Installation

Clone the repository and install dependencies:

git clone https://github.com/DmitryPirs/user-management-dashboard.git
cd user-management-dashboard
npm install

---

## Running the App

Start the development server:

npm start

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## Usage

- Click the **Edit** button next to a user to modify their details.
- Change the name and email in the form and click **Save**.
- The **Save** button is enabled only when changes are made.
- To delete a user, click the **Delete** button.

---

## Project Structure

/src
/components # Reusable components (Button, Input, etc.)
/features # Redux slices and logic
/pages # Application pages
/services # API requests
/utils # Utility functions
App.jsx # Root component
index.js # Entry point

---

## Features

- Optimized rendering with `React.memo`, `useMemo`, and `useCallback`.
- Controlled forms with validation.
- Asynchronous API requests with loading and error states.
- Responsive design using Tailwind CSS.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.  
Ensure code style consistency and include tests for new features.

---

## License

MIT License © 2025 Your Name
