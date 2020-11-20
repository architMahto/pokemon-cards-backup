# Specify base image
FROM node:12.19.1-alpine AS builder

# Specify working directory
WORKDIR /var/www

# Install dependencies and build app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --silent
COPY ./ ./
RUN npm run build

# FROM node:12.19.1-alpine AS runner

# WORKDIR /var/www
# COPY --from=builder /var/www/build /var/www/build
# COPY --from=builder /var/www/package.json /var/www/package.json

# Default command
CMD ["npm", "start"]