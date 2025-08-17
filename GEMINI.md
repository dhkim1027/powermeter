# Project Overview

This project is a web-based monitoring tool for WiFi electricity usage. It displays real-time data in a table and includes controls for filtering the data. The front end is built with HTML, CSS, and JavaScript.

# Building and Running

To run this project, you need a local web server. You can use any simple web server, for example, Python's built-in server.

1.  Navigate to the project directory in your terminal.
2.  Run the command: `python -m http.server`
3.  Open your web browser and go to `http://localhost:8000`

The page will automatically fetch data from `api/emergancy.json` and update the table every 3 seconds.

# Development Conventions

*   **Styling**: The project uses a CSS reset (`css/reset.min.css`) and a main stylesheet (`css/main.css`).
*   **JavaScript**: The main application logic is in `js/main.js`. It uses `fetch` to get data from a local JSON file.
*   **Data**: The application fetches data from `api/emergancy.json`. To use different data, you can modify this file or change the fetch URL in `js/main.js`.
