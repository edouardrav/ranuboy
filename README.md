# 🍉 RANUBOY : a Rails + Nuxt boilerplate app

## env
Create a .env file in /backend with these informations:

```
COMPOSE_PROJECT_NAME=your_app

POSTGRES_PORT=5432 (or another if already in use)
POSTGRES_USER=your_app
POSTGRES_PASSWORD=your_db_password
POSTGRES_DB=your_app_development

# you can generate this key with the command rails secret
DEVISE_JWT_SECRET_KEY=long_password
```


## Start rails backend
Go to /backend, make sure you have docker installed, and then launch the db:
`docker compose up -d`

Init the db and start the server:
`rails db:create db:migrate`
`rails s`

## Start nuxt frontend
Go to /frontend, and:
`npm install`
`npm run dev`

