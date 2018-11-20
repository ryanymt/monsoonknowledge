# To Build
run the below command
```sh
npm install
```

# To Run
run the below command
```sh
NODE_ENV=dev node server.js
NODE_ENV=uat node server.js
NODE_ENV=prod node server.js
```

# Available Variable examples
```sh
NODE_ENV=dev
PORT=8080
PUBLIC_URL=127.0.0.1
```

# CURL
```sh
curl localhost:8080/simple-app/dev
curl localhost:8080/simple-app/uat
curl localhost:8080/simple-app/prod
```
