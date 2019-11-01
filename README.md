# Server


**FORTUNE**
----
*  **Error Response:** 
**Code:** 401 <br  />
**Content Example:**
```
{
    "messages":  [
        "You have to login first"
    ]
}
```
**Code:** 500 <br  />
**Content Example:**
```
{
    "errors": [
        "Internal server error"
    ]
}
``` 
*  **Data Params**
Aside from register and login, you need authentication using token that you got from register/log in and send it as headers
**headers:**
| property | type | description |
|--|--|--|
|`'token'`| string | access token for authentication |
---
**POST /users/manualSignUp**
*  **URL**
`/users/manualSignUp`
*  **Method:**
`POST`
  *  **Data Params**
**body:**
| property | type | description |
|--|--|--|
|`'email'`| string | email of the user |
|`'pass'`| string | password of the user |
 
*  **Success Response:**
  
**Code:** 200 <br  />
**Content Example:**
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYmJlNzRjNzBmMWRjYzk5ZGYyYjRlZSIsImVtYWlsIjoiY29iYUBhLmNvbSIsImlhdCI6MTU3MjU5NTUzMn0.gIqvzoKk_QVMLYCpYaTNmzQ2RJHgvc2DJh4_aiAQkl8"
}
```
---
**POST /users/googleSignIn**
*  **URL**
`/users/googleSignIn`
*  **Method:**
`POST`
  *  **Data Params**
**body:**
| property | type | description |
|--|--|--|
|`'email'`| string | email of the user |
|`'pass'`| string | password of the user |
 
*  **Success Response:**
  
**Code:** 200 <br  />
**Content Example:**
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYmJlNzRjNzBmMWRjYzk5ZGYyYjRlZSIsImVtYWlsIjoiY29iYUBhLmNvbSIsImlhdCI6MTU3MjU5NTUzMn0.gIqvzoKk_QVMLYCpYaTNmzQ2RJHgvc2DJh4_aiAQkl8"
}
```
---
**POST /users/manualSignIn**
*  **URL**
`/users/manualSignIn`
*  **Method:**
`POST`
  *  **Data Params**
**body:**
| property | type | description |
|--|--|--|
|`'email'`| string | email of the user |
|`'pass'`| string | password of the user |
 
*  **Success Response:**
  
**Code:** 200 <br  />
**Content Example:**
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYmJlNzRjNzBmMWRjYzk5ZGYyYjRlZSIsImVtYWlsIjoiY29iYUBhLmNvbSIsImlhdCI6MTU3MjU5NTUzMn0.gIqvzoKk_QVMLYCpYaTNmzQ2RJHgvc2DJh4_aiAQkl8"
}
```
 
---
**GET /horoscope/:day/:signname**
*  **URL**
  
`/horoscope/:day/:signname`
  
*  **Method:**
  
`GET`
*  **Data Params**
**params:**
| property | type | description |
|--|--|--|
|`'day'`| string | time of fortune telling ('today', 'week', and 'year' |
|`'signname'`| string | zodiac name (ex: 'taurus') |
*  **Success Response:**
**Code:** 200 <br  />
**Content Example:**
```
{
    "date": "2019-11-01",
    "horoscope": "You are likely to stick to basics instead of letting your imagination run wild today, says Ganesha. At work, you may feel some pressure from your peers to do things differently. Think things out and be certain before you take any decision, advises Ganesha.",
    "sunsign": "taurus"
}
```
----
  
**GET /cookies/fortune**
*  **URL**
  
`/cookies/fortune`
  
*  **Method:**
  
`GET`
*  **Success Response:**
**Code:** 200 <br  />
**Content Example:**
```
{
    "fortune": "Your good nature will bring unbounded happiness."
}
```
---
**GET /tarots**
*  **URL**
  
`/tarots`
  
*  **Method:**
  
`GET`
*  **Success Response:**
**Code:** 200 <br  />
**Content Example:**
```
{
    "nhits": 1,
    "cards": [
        {
            "name": "Seven of Pentacles",
            "name_short": "pe07",
            "value": "seven",
            "value_int": 7,
            "suit": "pentacles",
            "type": "minor",
            "meaning_up": "These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels--and another innocence, ingenuity, purgation.",
            "meaning_rev": "Cause for anxiety regarding money which it may be proposed to lend.",
            "desc": "A young man, leaning on his staff, looks intently at seven pentacles attached to a clump of greenery on his right; one would say that these were his treasures and that his heart was there."
        }
    ]
}
```
