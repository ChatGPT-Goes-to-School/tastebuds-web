# Use the official Node.js image as the base image
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the desired port (adjust as per your application's needs)
EXPOSE 3000

# Set the command to run the application
CMD ["npm", "run", "dev"]
