FROM node:20.13.1-alpine

WORKDIR /usr/app

COPY package*.json /usr/app

RUN npm install

COPY ./src ./src

EXPOSE 3004