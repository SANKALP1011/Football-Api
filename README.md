# Football-Api
- Node and express based ongoing football api

# About 
- This is the authenticated football where once the user is authenticated then user could use the auth token to access the other football routes.
- This api fetches the information about various things such as Leagues , Clubs , Players and number of trophioes that club has won till now.

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
 
# Json Demo Response 

 
  

