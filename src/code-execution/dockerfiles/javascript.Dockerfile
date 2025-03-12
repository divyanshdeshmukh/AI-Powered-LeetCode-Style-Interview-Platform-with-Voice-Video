
FROM node:18-alpine

WORKDIR /app

# Install necessary packages
RUN apk add --no-cache python3 g++ make

# Copy runtime files
COPY ./runtime /app/runtime

# Set up security measures
RUN adduser -D appuser
USER appuser

# Set execution timeout
ENV TIMEOUT=5000

# Entry point
ENTRYPOINT ["node", "runtime/runner.js"]
