FROM node:20-alpine AS builder

WORKDIR /app

COPY ./package.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html