#The latest version of node as a base image
FROM node as build

#Changing working directory to /app:
WORKDIR /app

# Retrieving the content of my app from GitHub
RUN wget https://github.com/snap-balance/mobdev_ca3/archive/main.tar.gz \
&& tar xf main.tar.gz \
&& rm main.tar.gz 

# Changing working directory to /app/mobdev_ca3-main
WORKDIR /app/mobdev_ca3-main/

# Installing ionic globally
RUN npm install -g ionic

#Installing all its dependencies
RUN npm install

# Building our downloaded GitHub application for deployment
RUN npm run build --prod

# Fetching a nginx/alpine server to serve
FROM nginx:alpine

# Creating a new user to secure running commands
#RUN adduser -D static

# Exposing to the port 80
EXPOSE 80

# Removing the entire content of the /usr/share/nginx/html folder
RUN rm -rf /usr/share/nginx/html/*

# Switching to our non-root user and their working directory
#USER static

# Copying the application files into /usr/share/nginx/html
COPY --from=build /app/mobdev_ca3-main/www/ /usr/share/nginx/html/