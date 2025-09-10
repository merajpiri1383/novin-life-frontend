# Use Node.js 22.14 LTS
FROM node:22.14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build Next.js app
RUN npm run build


# ------------------------
FROM node:22.14-alpine AS runner

WORKDIR /app

COPY . /app

# Expose Next.js default port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Start Next.js
CMD ["npm", "start"]