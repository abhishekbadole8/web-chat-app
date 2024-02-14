# React Chat Application

This is a simple chat application built with React and Socket.IO, allowing users to communicate in real-time.

## Features

- Real-time messaging: Users can send and receive messages instantly.
- Join rooms: Users can join different chat rooms to communicate with others.
- Simple interface: Clean and intuitive user interface for easy messaging.

## Technologies Used

- React: Frontend framework for building the user interface.
- Socket.IO: Library for real-time web applications, used for client-server communication.
- Express: Web application framework for Node.js, used for server-side logic.
- CSS Modules: CSS styling approach for modular and scoped CSS.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/abhishekbadole8/web-chat-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-chat-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. **Update Socket URL**: Open the `App.js` file and update the socket  URL to match your server's URL. Look for the following line:

    ```javascript
    const socket = io.connect(`YOUR-API`);
    ```

    Replace `"YOUR-API"` with your server's URL.

5. Start the development server:

    ```bash
    npm start
    ```
6. Open your browser and visit `http://localhost:5173` to view the application.

## Server Host

The server for this application is hosted at [web-chat-app-be](https://github.com/abhishekbadole8/web-chat-app-be). Please follow the instructions in the repository to set up and run the server.

## Usage

- Enter your username and join a chat room.
- Start sending messages in the chat room.
- Messages will be displayed in real-time to all users in the room.

## Folder Structure

react-chat-app/
│
├── public/ # Static files
│ └──  #  static assets
│
├── src/ # Source files
│ ├── components/ # React components
│ │ ├── Main/ # Main chat component
│ │ ├── Menu/ # Menu component
│ │ ├── Footer/ # Footer component
│ │ ├── Header/ # Header component
│ │ ├── JoinModal/ # JoinModal component
│ │ └── Chat/ # Chat component
│ │
│ ├── utils/ # needed functions
│ │ └── # getCustomDateAndTime funtion
│ │
│ ├── App.js # Main application component
│ └── ... # Other source files
├── package.json # Project dependencies and scripts
└── README.md # Project documentation