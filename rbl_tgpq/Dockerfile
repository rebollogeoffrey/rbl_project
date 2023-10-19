# Framework usage
FROM node:lts-alpine

# Create folder APP and move inside index inside it
RUN mkdir /app
WORKDIR /app

# Copy the package*.json and paste them in the /app
COPY package*.json ./

# Install dependancies
RUN npm i

# Copy all and paste it in the /app
COPY . .

# Start the project
CMD npm start