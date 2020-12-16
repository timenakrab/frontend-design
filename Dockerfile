FROM node:13.3.0-alpine
LABEL maintainer="Watchara Hongkim"

ARG WORKDIR=/app
ARG PORT=8888

RUN echo ${PORT}
RUN mkdir ${WORKDIR}
WORKDIR ${WORKDIR}

COPY . .

RUN npm install

RUN npm run build

EXPOSE ${PORT}
CMD ["npm", "start"]
