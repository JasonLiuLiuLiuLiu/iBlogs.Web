FROM nginx:stable-alpine
COPY dist/ /usr/share/nginx/html/
COPY config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
