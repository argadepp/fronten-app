FROM node:14

WORKDIR /app

COPY package.json .
RUN npm install
RUN apt update && apt-get install sshpass -y

COPY . .

EXPOSE 3000

CMD ["npm", "start"]