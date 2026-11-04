FROM nginx:stable-alpine
COPY index.html style.css app.js i18n.js cv.js /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY nginx.conf /etc/nginx/conf.d/default.conf
