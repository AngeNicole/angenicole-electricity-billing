FROM node:16-bullseye-slim

RUN apt-get update && apt-get install -y openssl

WORKDIR /usr/app

COPY ./package.json /usr/app
    
RUN yarn 

COPY . . 

RUN npx prisma generate

RUN npx prisma migrate deploy

RUN npm run build

EXPOSE 5000


CMD ["npm","start"]