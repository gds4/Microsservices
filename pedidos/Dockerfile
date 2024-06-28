FROM node:20.13.1-alpine

WORKDIR /usr/app

COPY package*.json /usr/app

RUN npm install

COPY ./src ./src

COPY ./prisma ./prisma

ENV DATABASE_URL="postgresql://postgres:root123@db:5432/ms-pedidos?schema=public"

RUN npx prisma generate

EXPOSE 3002