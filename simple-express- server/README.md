# Anythink Market

Anythink Market is a simple Express server application that listens on port 8001. This project is designed to demonstrate the use of Docker for containerization and nodemon for automatic code updates during development.

## Project Structure

```
anythink-market
├── src
│   ├── server.js
├── Dockerfile
├── package.json
├── yarn.lock
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- Yarn (version 1.22 or later)
- Docker (version 20.10 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-diyph0aj.git
   cd Anythink-Market-diyph0aj
   ```

2. Install dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server with automatic code updates, use the following command:

```
yarn start
```

The server will be running at `http://localhost:8001`.

### Building the Docker Image

To build the Docker image for the Express server, run:

```
docker build -t anythink-market .
```

### Running the Docker Container

After building the image, you can run the container with:

```
docker run -p 8001:8001 anythink-market
```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.