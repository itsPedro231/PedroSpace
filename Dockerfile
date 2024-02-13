FROM node:18.18.2-alpine
WORKDIR /app/frontend

COPY Frontend/package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
COPY . ./Frontend/
EXPOSE 5173