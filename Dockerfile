FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm config set registry http://registry.npm.taobao.org/

RUN npm install pm2 -g

RUN npm install

RUN apk add --no-cache ffmpeg

RUN echo "ffmpeg 安装成功"

RUN apk add nginx

RUN mkdir -p /run/nginx

RUN cp nginx/nginx.conf /etc/nginx/nginx.conf

RUN cp nginx/api.xiyuyizhi.xyz.conf /etc/nginx/conf.d/api.xiyuyizhi.xyz.conf

RUN cp nginx/live.xiyuyizhi.xyz.conf /etc/nginx/conf.d/live.xiyuyizhi.xyz.conf

RUN nginx -t

RUN nginx

RUN echo "nginx 启动成功"

EXPOSE 80

CMD ["npm","run","prod"]