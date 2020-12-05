FROM node:14.15.1-alpine
LABEL maintainer="Watchara Hongkim"

ARG WORKDIR=/app
ARG PORT=5050

RUN mkdir ${WORKDIR}
WORKDIR ${WORKDIR}

COPY package*.json ${WORKDIR}/
RUN npm install --only=production
COPY . .
RUN npm run build

EXPOSE ${PORT}
CMD ["npm", "start"]
