FROM node:18.18.2-alpine
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install 

COPY . .

EXPOSE 5173
CMD npm run dev -- --host 0.0.0.0