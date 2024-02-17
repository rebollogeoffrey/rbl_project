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

# Includes wait-for-it.sh and docker-entrypoint.sh
RUN chmod +x ./wait-for-it.sh ./docker-entrypoint.sh
RUN apk update && apk add bash

# Start the project
ENTRYPOINT ["sh","./docker-entrypoint.sh"]
CMD npm start