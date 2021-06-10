FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json server.js ./

RUN npm ci

EXPOSE 4000

CMD [ "npm", "start" ]