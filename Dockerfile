FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Update aptitude with new repo
RUN apt-get update

# Install software
RUN apt-get install -y git
RUN git clone https://github.com/drinkins85/node-git.git newrepo

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]