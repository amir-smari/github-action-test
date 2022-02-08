FROM node:14-alpine as build-stage

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

RUN yarn run build

COPY ./.output /app/.output


# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

# start the app
CMD ["yarn","start"]

