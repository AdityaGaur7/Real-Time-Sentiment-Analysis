# Real-Time Sentiment Analysis Dashboard

This project is a real-time sentiment analysis dashboard that displays sentiment scores for live news headlines. The application consists of a backend server that streams data from the News API and performs sentiment analysis, and a frontend React dashboard that visualizes the sentiment scores in real-time.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Troubleshooting](#troubleshooting)
- [Acknowledgments](#acknowledgments)

## Features

- **Real-Time Streaming**: Fetches live news headlines every 10 seconds.
- **Sentiment Analysis**: Generates a random sentiment score for each headline (for demonstration purposes).
- **Real-Time Updates**: Uses WebSockets (Socket.IO) to push sentiment data to the React frontend in real time.
- **Responsive Design**: Responsive and styled frontend with sentiment-based color coding.

## Tech Stack

- **Frontend**: React, Socket.IO Client
- **Backend**: Node.js, Express, Socket.IO, Axios
- **External API**: [News API](https://newsapi.org/)

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A News API key ([Sign up here](https://newsapi.org/register) for access)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/real-time-sentiment-analysis.git
    cd real-time-sentiment-analysis
    ```

2. Install dependencies for both the server and client:

    ```bash
    cd server
    npm install
    cd ../client
    npm install
    ```

### Running the Application

1. Start the server:

    ```bash
    cd server
    npm start
    ```

2. Start the client:

    ```bash
    cd ../client
    npm start
    ```

The server will run on `http://localhost:4000`, and the frontend will run on `http://localhost:5173`.

## Environment Variables

Create a `.env` file in the `server` directory and add the following variables:

```plaintext
NEWS_API_KEY=your_news_api_key_here
