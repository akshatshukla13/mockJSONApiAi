# Project Overview

This project is a mock JSON API designed to help developers test their applications. It provides a simple and easy-to-use interface for creating, reading, updating, and deleting mock data.

## Features

- Create mock data
- Read mock data
- Easy-to-use interface

# Setup

To set up the project, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/akshatshukla13/mockJSONApiAi.git
    ```

2. **Navigate to the client directory:**
    ```sh
    cd mockJSONApi/client
    ```

3. **Install client dependencies:**
    ```sh
    npm install
    ```

4. **Start the client server:**
    ```sh
    npm run dev
    ```

5. **Navigate to the server directory:**
    ```sh
    cd ../server
    ```

6. **Install server dependencies:**
    ```sh
    npm install
    ```

7. **Start the server:**
    ```sh
    npm run dev
    ```

8. **Access the API:**
    Open your browser and navigate to `http://localhost:5173` for the client and `http://localhost:3000` for the server.

    9. **Set up environment variables:**
    
        Create a `.env` file in the `server` directory with the following content:
        ```env
        PORT=3000
        MONGODB_URI=your_mongodb_connection_string
        API_KEY=your_api_key
        ```
        ```

You are now ready to use the mock JSON API for your development and testing needs.
