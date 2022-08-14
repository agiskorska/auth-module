# auth-module

#### This repo is to have a starting point for any project for user authorisation on the server side. It will be possible to deploy it to Heroku soon.

## Routes available now: 
|Request|Route|Expected behaviour|
|---|---|---|
|`GET`|`/user/:username`|returns username upon succesfull login. Requires password as a `req.body`|
|`POST`|`/user/register`|inserts a new user into DB. Requires ```req.body = {"username":[username], "password":[password]} ``` . Will hash the password before inserting into DB|
|`PUT`|`user/reset/:username`| Not yet working. |
