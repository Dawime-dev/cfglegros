FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY --from=build /app/dist /srv
RUN printf \":80 {\n\troot * /srv\n\ttry_files {path} {path}.html {path}/index.html\n\tfile_server\n\tencode gzip\n\theader -Server\n\thandle_errors {\n\t\trewrite * /404.html\n\t\tfile_server\n\t}\n}\n\" > /etc/caddy/Caddyfile
EXPOSE 80
CMD [\"caddy\", \"run\", \"--config\", \"/etc/caddy/Caddyfile\"]
