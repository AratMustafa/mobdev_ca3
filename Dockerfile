FROM node:13-alpine as build
WORKDIR /app
RUN wget https://github.com/snap-balance/mobdev_ca3/archive/main.zip
COPY package*.json /app/
RUN npm install -g ionic
RUN npm install
COPY ./ /app/
RUN npm run-script build:prod
FROM nginx:alpine
COPY --from=builder /etc/passwd /etc/passwd
EXPOSE 8100
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/www/ /usr/share/nginx/html/