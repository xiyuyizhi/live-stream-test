FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm config set registry http://registry.npm.taobao.org/ \ 
    && npm install pm2 -g  \
    && npm install

RUN apk add --no-cache ffmpeg  \ 
    && echo "ffmpeg 安装成功"

RUN apk add nginx  \
    && mkdir -p /run/nginx  \
    && cp nginx/nginx.conf /etc/nginx/nginx.conf  \
    && cp nginx/api.xiyuyizhi.xyz.conf /etc/nginx/conf.d/api.xiyuyizhi.xyz.conf  \
    && cp nginx/live.xiyuyizhi.xyz.conf /etc/nginx/conf.d/live.xiyuyizhi.xyz.conf  \
    && nginx -t  \
    && echo "nginx 安装成功"

EXPOSE 80

CMD ["npm","run","prod"]
