FROM node:22 as build

WORKDIR /app/src

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build


FROM node:20.13.1-alpine3.19

RUN addgroup -S www && adduser -S www -G www
USER www
WORKDIR /usr/app

COPY --from=build /app/src/dist/curriculum-vitae/ ./
CMD node server/server.mjs

EXPOSE 4000