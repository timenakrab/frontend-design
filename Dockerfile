FROM node:13.3.0-alpine
LABEL maintainer="Watchara Hongkim"

ARG WORKDIR=/app

WORKDIR ${WORKDIR}

COPY . .

RUN npm install

CMD ["npm", "run", "production"]
