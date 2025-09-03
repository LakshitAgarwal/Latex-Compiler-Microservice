# LaTeX Compiler Microservice

A microservice that compiles LaTeX code into PDF documents. It exposes a single API endpoint `/compile` that receives LaTeX code, compiles it using `pdflatex`, and returns the resulting PDF. This allows other applications to easily generate PDF documents from LaTeX source.

🚀 **Key Features**

*   **LaTeX to PDF Compilation:** Compiles LaTeX code received via API into PDF documents using `pdflatex`.
*   **Dockerized Deployment:** Easily deployable using Docker for consistent environments.

🛠️ **Tech Stack**

*   **Framework:** Express.js
*   **LaTeX Engine:** `pdflatex`
*   **Containerization:** Docker
*   **Operating System:** Debian Bullseye (in Dockerfile)
*   **Base Image:** `node:18-bullseye`


📦 **Getting Started / Setup Instructions**

### Prerequisites

*   Node.js (version 18 or higher)
*   npm (Node Package Manager)
*   Docker (optional, for containerized deployment)
*   `pdflatex` (LaTeX distribution) - required if running locally

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd latex-compiler-microservice
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally

1.  **Start the server:**
    ```bash
    npm start
    ```
    This will start the server on port 3001.


### Building and Running with Docker

1.  **Build the Docker image:**
    ```bash
    docker build -t latex-compiler-microservice .
    ```

2.  **Run the Docker container:**
    ```bash
    docker run -p 3001:3001 latex-compiler-microservice
    ```

    This will run the container and map port 3001 on your host machine to port 3001 in the container.


💖 **Thanks**

Thank you for checking out this project! We hope it's helpful.

This is written by [readme.ai](https://readme-generator-phi.vercel.app/).
