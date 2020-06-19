FROM nginx:stable-alpine
COPY dist/ /usr/share/nginx/html/
COPY config/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
