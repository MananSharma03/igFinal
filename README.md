# Personal Portfolio Website with Chatbot

A modern, responsive personal portfolio website featuring an interactive AI chatbot that answers questions about the portfolio owner's skills, projects, and experience.

## Features

- Clean, minimal black and white design
- Responsive layout for all device sizes
- Interactive AI chatbot
- Skills, projects, and contact sections
- Downloadable resume

## Running Locally with Hot Module Reloading

To run this project locally with working hot module reloading, follow these steps:

### Method 1: Using the Dev Script (Recommended)

1. Clone the repository
2. Navigate to the project directory
3. Make the dev script executable (if not already done):
   ```
   chmod +x dev.sh
   ```
4. Run the development script:
   ```
   ./dev.sh
   ```

This script sets up the proper environment variables for hot module reloading and starts the development server.

### Method 2: Manual Environment Setup

If you prefer to run the commands manually:

1. Clone the repository
2. Navigate to the project directory
3. Set the environment variables:
   ```
   export VITE_HMR_HOST=localhost
   export VITE_HMR_PORT=5000
   export VITE_HMR_PROTOCOL=ws
   export VITE_HMR_TIMEOUT=5000
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Making Changes

With hot module reloading properly configured, your changes should immediately reflect in the browser. If you're still experiencing issues with HMR, try:

1. Clearing your browser cache
2. Opening the browser's developer console to check for any error messages
3. Ensuring you're running the latest version of Node.js and npm

## Technology Stack

- Frontend: React with TypeScript
- Styling: Tailwind CSS
- Icons: Font Awesome
- Build Tool: Vite
- Server: Express

## Contact

For questions or suggestions, please use the contact form on the website or reach out directly via social media links in the footer.