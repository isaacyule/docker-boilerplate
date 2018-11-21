# Build container with image 'node'
FROM node:10.13.0

# Create and set working directory (for backend)
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Run commands
RUN npm install -g nodemon

# Exposes port to listen on
EXPOSE 3000
CMD [ "npm", "start" ]
