FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY main.js .

RUN npm install

EXPOSE 3000

CMD ["node", "main.js"]