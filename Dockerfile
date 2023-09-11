FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn install --immutable --immutable-cache --check-cache

RUN npm run build

USER node

CMD [  "npm", "run", "start:migrate:prod" ]
