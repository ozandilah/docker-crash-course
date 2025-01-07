FROM node:20-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


EXPOSE 6077

CMD [ "npm","run" , "dev"]