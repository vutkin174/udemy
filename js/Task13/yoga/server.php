<?php 
server {
    listen 80;
    server_name localhost;
    location / {
    root html;
    index index.html index.htm;
    }
    error_page 405 =200 $uri;
    # ...
    }
echo $_SERVER[‘REMOTE_ADDR‘];