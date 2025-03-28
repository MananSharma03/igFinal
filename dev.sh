#!/bin/bash

# Set the environment variables for HMR
export VITE_HMR_HOST=localhost
export VITE_HMR_PORT=5000
export VITE_HMR_PROTOCOL=ws
export VITE_HMR_TIMEOUT=5000

# Run the application with the development environment
npm run dev