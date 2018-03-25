FROM node:carbon

WORKDIR .

RUN apt-get update

RUN apt-get install -y git
#RUN git clone https://github.com/drinkins85/node-git.git newrepo

COPY package*.json ./

RUN npm install
RUN npm run build

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE ${PORT}

RUN npm install --quient
RUN npm run build

CMD [ "npm", "start" ]