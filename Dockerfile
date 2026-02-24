FROM node:18-alpine

# create app directory
WORKDIR /app

# copy dependencies
COPY package*.json ./

# install dependencies
RUN npm install

# copy app code
COPY . .

# expose port
EXPOSE 3000

# start app
CMD ["node", "app.js"]