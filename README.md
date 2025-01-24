# Hotel Booking System

Welcome to the Hotel Booking System, a comprehensive platform designed to offer a seamless booking experience for guests and efficient management for hotel staff. This project includes both frontend and backend components to ensure a complete and fully functional application.

## Table of Contents
- [Overview](#overview)
- [Screenshots](#Screenshots)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Overview
The Hotel Booking System allows users to browse and book rooms, view hotel information, manage bookings, and more. It features a user-friendly interface and a robust backend to handle all necessary operations securely.

## Project Preciew

[CLICK FOR PREVIEW HERE](https://hotel-website-sage-five.vercel.app/)


## Features
- **User Authentication**: Secure signup and login functionality using bcrypt.
- **Room Browsing**: View detailed information about available rooms and book them.
- **Booking Management**: Users can view and manage their bookings.
- **Responsive Design**: Optimized for various devices, including mobile and desktop.
- **Admin Dashboard**: Manage hotel information, rooms, and bookings (future development).

## Technologies
### Frontend
- React.js
- Html
- CSS
- JavaScript
- React Router

### Backend
- Express.js
- MongoDB (with Mongoose)
- Axios
- bcrypt.js for password hashing

### Environment
- Node.js
- dotenv

## Setup
### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB URI for database connection.

### Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/hotel-booking-system.git
    cd hotel-booking-system
    ```

2. **Backend Setup**:
    ```bash
    cd server
    npm install
    ```

    Create a `.env` file in the `server` directory and add your MongoDB URI:
    ```
    MONGO_URI=your_mongodb_uri
    ```

3. **Frontend Setup**:
    ```bash
    cd ../client
    npm install
    ```

## Usage
1. **Start the backend server**:
    ```bash
    cd server
    npm start
    ```

2. **Start the frontend development server**:
    ```bash
    cd ../client
    npm start
    ```

3. Navigate to `http://localhost:3000` in your browser to access the application.

## API Endpoints
### Authentication
- `POST /signup`: Register a new user.
- `POST /login`: Authenticate a user and retrieve a token.

### Rooms
- `GET /rooms`: Retrieve a list of available rooms (future implementation).

### Bookings
- `POST /book`: Book a room (future implementation).
- `GET /bookings`: Retrieve user bookings (future implementation).

## Testing
To run tests for the backend, you can use a tool like Jest or Mocha. For example:
1. Install Jest:
    ```bash
    cd server
    npm install --save-dev jest
    ```

2. Add a test script to your `package.json`:
    ```json
    "scripts": {
        "test": "jest"
    }
    ```

3. Write your tests in the `tests` directory and run them:
    ```bash
    npm test
    ```

## Deployment
### Backend
1. **Deploy to Heroku**:
    - Create a new Heroku app.
    - Add your MongoDB URI and any other environment variables to your Heroku config.
    - Deploy your server code to Heroku.

### Frontend
1. **Deploy to Vercel**:
    - Create a new Vercel project.
    - Configure your environment variables.
    - Deploy your React app to Vercel.

## Contributing
Feel free to contribute to this project by submitting a pull request. Ensure your changes are well-documented and tested.

## Acknowledgments
Thanks to all contributors and the open-source community for their invaluable support and resources.

