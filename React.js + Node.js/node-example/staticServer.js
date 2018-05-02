        const https = require('https');
        const fs = require("fs");
        const PORT = 8000;
        const KEYS = ['HTML', 'CSS', 'JS', 'React', 'Node'];


        https.createServer((request, response) => {
            let ndex = request.url.indexOf('?');
        const url = request.url.slice(0, index);
        const queryParams = request.url.slice(index + 1)

            .split("&").reduce((general, param) => {
            const splitted = param.split("=");
        general[splitted[0]] = splitted[1];
        return general;
        }, {});

        if(url in urlMap){
            response.write(urlMap[url](queryParams));

        } else {
            let public = /^\/public\/{1}/i;
            if(public.test(url)){
                response.write(urlMap.public(
                    url.replace(public, ''))
                );
            } else {
                response.write("404 not found!");
            }

        }
        response.end("END");
        }).listen(PORT);

