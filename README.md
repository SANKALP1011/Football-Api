# Football-Api v1.0.0
- Node and express based ongoing football api

# About 
- This is the authenticated football where once the user is authenticated then user could use the auth token to access the other football routes.
- This api fetches the information about various things such as Leagues , Clubs , Players and number of trophioes that club has won till now.

# Stack
 - Node and express as backend
 - Mysql as database
 - Heroku for deployment
 - Jwt token for authentication
 - Joi for validation

# Routes 
- Register
  > - This route helps in registering the user and authenticating the user 
  > - Takes three parameters in the body 
      - Name
      - Email
      - Password
  > - Can be accessed by /Register
- Login
  > - Once the user registers , then only the user can come and use the login route
  > - If the user is logged in successfully , then a token is provided to him which would help the user to access the other routes by using the auth token.
  > - Only Logged in user with the correct token can access the football routes.
  > - Takes two parameters 
      - Email
      - Password
  > - Can be accessed by /login
- Clubs
  > - Fetches the information about clubs
  > - Fetches the information about club with specific id by /clubs/:id
  > - Fetches the information about club with specific name by /clubs/:name
- Leagues
  > - Fetches the information about various leagues.
  > - Fetches the information about league with specific id by /leagues/:id
  > - Fetches the information about league with specifc name by /leagues/:name
- Players 
  > - Fetches the information about all players present in a clubs
  > - Fetches the information about players with specific id by passing /players/:id
  > - Fetches the information about players with specifc name by passinf /players/:name
- Trophies
  > - Fetches the information about trophies for all the clubs 
 
# Note 
> Currently , no data is added to the database so if you will try to run the api and after registering you would get no data back from the api , you will get the response that no such table exists.
 
# Json Demo Response 
- Regsiter Response
``` json
[
{
    "success": "Yes",
    "message": "Successfully registered user in the database.",
    "Further": "You can use this credentials to login and use the auth token to access the other routes"
}
]

```
- Login Response
``` json 
[
{
    "Succes": "Yes",
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXNzd29yZFZhbGlkYXRpb24iOlt7Ik5hbWUiOiJzYW5rYWxwcHBhbmR5eSIsIkVtYWlsIjoic2Fua2FscEBnbWFpbGxsbC5jb20iLCJQYXNzd29yZCI6InNoYTEkYWM4NmUzODQkMSRkZDg2MGQyZWQ3MGMyNDI5ODg0MDc4ZmY1N2Y5MzI2ZDBkYjEzOWFiIn1dLCJpYXQiOjE2NTY3NzU1NTQsImV4cCI6MTY1NzYzOTU1NH0.yF3BfkLlpX2LeKHg1sa7VvibIMjXg_HcgV2qnguf12A",
    "message": "You can use this token to access the routes"
}
]
```
- Leagues
``` json
[
{
    "Success": "No",
    "message": {
        "code": "ER_NO_SUCH_TABLE",
        "errno": 1146,
        "sqlMessage": "Table 'footballapi.leagues' doesn't exist",
        "sqlState": "42S02",
        "index": 0,
        "sql": "Select * from Leagues"
    }
}
]
```
- Leagues By Id
``` json  
[
{
    "Success": "No",
    "message": {
        "code": "ER_NO_SUCH_TABLE",
        "errno": 1146,
        "sqlMessage": "Table 'footballapi.league' doesn't exist",
        "sqlState": "42S02",
        "index": 0,
        "sql": "Select * from League where id = NULL"
    }
}
]
```
- Leagues By Name
``` json
[
{
    "Success": "No",
    "message": {
        "code": "ER_NO_SUCH_TABLE",
        "errno": 1146,
        "sqlMessage": "Table 'footballapi.league' doesn't exist",
        "sqlState": "42S02",
        "index": 0,
        "sql": "Select * from League where id = NULL"
    }
}
]
```
- Clubs
``` json
[
{
    "success": "No",
    "message": "You are unathenticated , please try again"
}
]
```
- Clubs By Id 
``` json
[
{
    "success": "No",
    "message": "You are unathenticated , please try again"
}
]
```
- Clubs By Name 
``` json 
[
{
    "success": "No",
    "message": "You are unathenticated , please try again"
}
]
```
- Players
``` json 
[
{
    "Success": "No",
    "message": {
        "code": "ER_NO_SUCH_TABLE",
        "errno": 1146,
        "sqlMessage": "Table 'footballapi.players' doesn't exist",
        "sqlState": "42S02",
        "index": 0,
        "sql": "Select * from Players"
    }
}
]
```
- Players By Id
``` json
[
{
    "Success": "Yes",
    "message": {
        "code": "ER_NO_SUCH_TABLE",
        "errno": 1146,
        "sqlMessage": "Table 'footballapi.players' doesn't exist",
        "sqlState": "42S02",
        "index": 0,
        "sql": "Select * from Players where id = NULL"
    }
}
]
```
- Players By Name
``` json
[
{
    "Success": "Yes",
    "message": {
        "code": "ER_NO_SUCH_TABLE",
        "errno": 1146,
        "sqlMessage": "Table 'footballapi.players' doesn't exist",
        "sqlState": "42S02",
        "index": 0,
        "sql": "Select * from Players where id = NULL"
    }
}
]
```
  

