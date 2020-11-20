# pokemon-cards-backup

## Overview

An application that backs up Pokemon cards to a database in MongoDB

## Prerequisites

### Environment Variables

* `MONGO_PORT`
* `MONGO_DB`
* `MONGO_HOSTNAME`

### Programs, Databases, or Runtime Environments

* Docker
* Docker Compose
* NodeJS
* NPM
* MongoDB

## How to Run

### With Docker Compose

1. `docker-compose up`

### With Docker

1. `docker build -t pokemon_cards_backup .`
2. `docker run --env-file .env -p 8080:8080 pokemon_cards_backup`

### Without Docker or Docker Compose

1. `npm i`
2. `npm run dev`
