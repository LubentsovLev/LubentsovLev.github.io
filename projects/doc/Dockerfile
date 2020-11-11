FROM nginx:1.18.0-alpine
COPY ./.nginx/nginx.conf /etc/nginx/
RUN rm -rf /usr/share/nginx/html/*
COPY ./html /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]