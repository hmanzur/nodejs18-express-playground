FROM node:18-slim

COPY package*.json .

RUN npm ci --silent

COPY . .

EXPOSE 3000

CMD npm run serve

HEALTHCHECK CMD curl --fail http://localhost:3000/health