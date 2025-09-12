# Use official Node.js image
FROM node:18-bullseye


# Install LaTeX with optimized packages for resume compilation
RUN apt-get update && apt-get install -y \
    texlive-latex-base \
    texlive-latex-extra \
    texlive-fonts-recommended \
    texlive-latex-recommended \
    && rm -rf /var/lib/apt/lists/*


# Set working directory inside container
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install --only=production

# Copy the rest of the app
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the service
CMD ["npm", "start"]
