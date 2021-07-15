FROM node:15
WORKDIR /app
COPY package.json .
COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD [ "nodemon", "run", "index.js" ]