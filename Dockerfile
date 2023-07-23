FROM node:latest

WORKDIR /app

COPY package.json /app
RUN npm i

COPY . .
RUN npm run build

ENV PORT 4200;
ENV TEST_1 "test env"

CMD ["npm", "run", "start"]
