# Node
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
RUN yarn

# Copy all files
COPY . .

CMD ["yarn", "dev"]