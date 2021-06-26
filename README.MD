# Express + Rascal + RabbitMQ + Typescript

Example or sending message from express server to worker script via rabbitmq.


## Run rabbitmq with docker-compose
```
docker-compose up
```

## Install app dependencies
```
yarn 
```

## Build the app
```
yarn build
```

## Run express server
```
//development
yarn dev

//build
yarn start
```

## Run worker script
```
//development
yarn dev:worker

//build
yarn start:worker
```

### Run worker with pm2

```
// development
pm2 start yarn --name worker -- dev:worker

// build
pm2 start yarn --name worker -- start:worker
```

### Scale worker instances
```
pm2 scale worker +4
```

