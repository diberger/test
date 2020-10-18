FROM node:stretch

WORKDIR /test
# add `/app/node_modules/.bin` to $PATH
ENV PATH /test/node_modules/.bin:$PATH
RUN apt update && apt install git
RUN git clone https://github.com/diberger/test.git
# install app dependencies
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]