# 🚀 DevOps Capstone: Persistent 3-Tier Web Stack

This repository contains a fully containerized **MERN-style** task management application. The project demonstrates advanced **Docker & Docker Compose** concepts, focusing on network isolation, data persistence, and automated infrastructure.

## 🏗 System Architecture

The application is architected into three distinct tiers to ensure security and scalability:

* **Frontend Tier:** An Nginx-based web server serving a JavaScript/HTML task manager.
* **Application Tier:** A Node.js Express API handling business logic and DB communication.
* **Data Tier:** A MongoDB NoSQL database instance for persistent storage.



---

## 🛠 DevOps Features Implemented

### 1. Data Persistence (Docker Volumes)
I implemented **Named Volumes** (`db-data`) for the MongoDB service. This ensures that even if the containers are stopped, removed, or the host reboots, the application data remains intact.

### 2. Network Isolation & Security
To follow security best practices, I implemented two custom bridge networks:
* **`public-net`**: Connects the Frontend and Backend.
* **`private-net`**: Connects the Backend and Database.
**Security Result:** The database is completely hidden from the public internet and the frontend container, reducing the attack surface.

### 3. Service Discovery & DNS
The stack uses Docker's internal DNS. The Backend connects to the database using the service name `database` instead of a hardcoded IP address, making the infrastructure portable.

### 4. Optimized Build Strategy
* **Base Images:** Used `node:18-alpine` and `nginx:alpine` to keep image sizes small and secure.
* **Read-Only Mounts:** The frontend source code is mounted as `:ro` (Read-Only) to prevent the container from modifying source files.

---

## 🚀 Getting Started

### Prerequisites
* Docker installed (20.10+)
* Docker Compose installed

### Deployment
Clone the repository and run:
```bash
docker-compose up --build -d
