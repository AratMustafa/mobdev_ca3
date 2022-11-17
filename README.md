## **** Welcome to mobdev_ca3 ****
## Usage

```sh
npm i -g @ionic/cli && ionic serve is going to run automaticly,we need to just hit 'y' or 'Y' in terminal,
(not case sensetive)to give allow to install ionic serve to your gitpod!
```

Already created a Dockerfile for cbwa_ca2

```dockerfile
FROM snap-balance/mobdev_ca3:latest

# Copy your static files
COPY . .
```
Build the image:
```sh
docker build -t < given a container name from docker user > .
```

Run the image:

```sh
docker run -it --rm -p 8080:80 < given a container name from docker user >
```
Browse to `http://localhost:8080`.

## Based on this documentation built the Dockerfile up!

Read the [deployment with docker in ionic](https://blog.knoldus.com/deployment-with-docker-in-ionic/).