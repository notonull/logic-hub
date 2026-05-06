---
title: Nginx conf配置模板
copyright: CC-BY-4.0
tags:
  - nginx
  - 模板
createTime: 2025/04/13 15:41:43
permalink: /blog/39xnr1uy/
---


## 1.nginx.conf

```markdown
worker_processes 8;

events {
    worker_connections 102400;
    multi_accept on;
}

http {
    include mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log /usr/local/nginx/logs/access.log main;

    sendfile        on;
    tcp_nopush      on;
    tcp_nodelay     on;

    keepalive_timeout    1800s;
    keepalive_requests   2000;

    types_hash_max_size          4096;
    client_max_body_size         1024m;
    map_hash_bucket_size         256;
    charset                      utf-8;
    server_names_hash_bucket_size 128;

    client_header_buffer_size    2k;
    large_client_header_buffers  4 4k;

    open_file_cache max=102400 inactive=20s;

    gzip              on;
    gzip_min_length   1k;
    gzip_buffers      4 16k;
    gzip_http_version 1.0;
    gzip_comp_level   2;
    gzip_types        text/plain application/x-javascript text/css application/xml;
    gzip_vary         on;

    proxy_connect_timeout  180s;
    proxy_send_timeout     180s;
    proxy_read_timeout     180s;

    fastcgi_connect_timeout 180s;
    fastcgi_send_timeout    180s;
    fastcgi_read_timeout    180s;

    server_tokens off;

    include /opt/app/nginx/conf/conf.d/*.conf;
}

```

## 2.conf.d/80.conf

```markdown
server {
listen       80;
server_name  demo.server;
# server_name www.server.com;

    add_header Access-Control-Allow-Methods 'GET,POST,OPTIONS';
    add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,token';

    location /server1/api {
        proxy_set_header Host                $host:80;
        proxy_pass                           http://127.0.0.1:9001/server/;
        proxy_set_header X-Real-IP           $remote_addr;
        proxy_set_header X-Real-Port         $remote_port;
        proxy_set_header X-Forwarded-For     $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade             $http_upgrade;
        proxy_set_header Connection          "upgrade";
    }

    location /server2 {
        proxy_set_header Host                $host:80;
        proxy_pass                           http://127.0.0.1:9998/server/;
        proxy_set_header X-Real-IP           $remote_addr;
        proxy_set_header X-Real-Port         $remote_port;
        proxy_set_header X-Forwarded-For     $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade             $http_upgrade;
        proxy_set_header Connection          "upgrade";
    }
}

```


## 3.conf.d/443.conf

```markdown
server {
    listen       443 ssl;
    listen       [::]:443 ssl;
    http2        on;
    server_name  192.168.44.158;

    ssl_certificate      "/opt/app/nginx/ssl/selfsigned.crt";
    ssl_certificate_key  "/opt/app/nginx/ssl/selfsigned.key";

    ssl_protocols        TLSv1.2 TLSv1.3;
    ssl_ciphers          'ECDHE+AESGCM:ECDHE+CHACHA20';
    ssl_prefer_server_ciphers on;

    ssl_session_cache    shared:SSL:10m;
    ssl_session_timeout  10m;
    ssl_session_tickets  off;

    ssl_ecdh_curve       X25519:secp384r1;

    add_header Access-Control-Allow-Methods 'GET,POST,OPTIONS';
    add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,token';

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self), accelerometer=(), autoplay=()" always;
    add_header X-Frame-Options "SAMEORIGIN";

    location / {
        autoindex   off;
        try_files   $uri $uri/ =404;
    }


    location /server1 {
        alias       /opt/server/project/server1/web;
        index       index.html;
        try_files   $uri /index.html =404;
    }

    location /server1/api {
        proxy_pass                 http://127.0.0.1/server1/api;
        proxy_set_header Host      $host:80;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}


```

