# Using node and alpine as base image
FROM node:alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
RUN yarn

# Copy all files
COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["yarn", "start"]
