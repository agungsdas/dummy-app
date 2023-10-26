FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN apk update
RUN apk add git

RUN npm install --only=production --quiet

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
