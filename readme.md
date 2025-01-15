# Project Overview

This project is a mock JSON API designed to help developers test their applications. It provides a simple and easy-to-use interface for creating and reading mock data using prompts.

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
    cd mockJSONApiAi/client
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

7. **Set up environment variables:**
    Create a `.env` file in the `server` directory with the following content:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    API_KEY=your_api_key
    ```

8. **Start the server:**
    ```sh
    npm run dev
    ```

9. **Access the API:**
    Open your browser and navigate to `http://localhost:5173` for the client and `http://localhost:3000` for the server.

You are now ready to use the mock JSON API for your development and testing needs.
