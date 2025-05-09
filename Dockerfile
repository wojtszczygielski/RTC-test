FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for.sh /wait-for.sh
RUN chmod +x /wait-for.sh

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
