FROM node:13.3.0-alpine
LABEL maintainer="Watchara Hongkim"

ARG WORKDIR=/app
# ARG PORT=5050

WORKDIR ${WORKDIR}

COPY . .

RUN npm install

# EXPOSE ${PORT}

CMD ["npm", "run", "production"]


# LABEL maintainer="Watchara Hongkim"

# ARG WORKDIR=/app
# ARG PORT=5050

# RUN mkdir ${WORKDIR}
# WORKDIR ${WORKDIR}

# COPY package*.json ${WORKDIR}/
# RUN npm install --only=production
# COPY . .
# RUN npm run build

# EXPOSE ${PORT}
# CMD ["npm", "start"]
