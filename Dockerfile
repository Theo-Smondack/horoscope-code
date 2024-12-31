FROM node:22-alpine

# Install required build tools and libraries
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    libc6-compat

# Set up the application directory
RUN mkdir -p /home/node/app/node_modules && \
    chown -R node:node /home/node/app

# Switch to the application directory
WORKDIR /home/node/app

# Copy only package.json and lock files for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY --chown=node:node . .

# Build the TypeScript files
RUN npm run build

# Expose the application port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
