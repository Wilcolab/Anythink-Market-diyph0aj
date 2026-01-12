
---

## Node.js Server (Express)

This project now includes a Node.js server that mirrors the FastAPI `/tasks` API.

### How to run the Node server

If using Docker:

```bash
docker compose up
<!-- WILCO-NODE-MIGRATION -->

## Node.js Migration Completed
<!-- Node.js migration completed -->

# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

## Node.js Server

A Node.js Express server has been added that mirrors the FastAPI backend.

### Run both servers

docker compose up

### Node.js API (port 8001)

GET /tasks  
POST /tasks  

The responses are identical to the FastAPI server.

## Node.js Server

A Node.js Express server is included in the `node-server` directory.

It exposes the same API as the FastAPI backend:

GET /tasks  
POST /tasks  

To run both servers together:

docker compose up

The Python server runs on port 8000 and the Node.js server runs on port 8001.
