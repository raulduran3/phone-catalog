# Phone Catalog
A MERN stack app to perfom CRUD on phones.
- Client: `React.js` and styling with `Material-UI`
- Server: RESTful API built with `Node.js` using `Express.js`
- Database: `MongoDB`

Both the server and client are deployed on the following sites:
- [Server](https://phone-catalo.herokuapp.com/phones)
- [Client](https://phone-catalog-app.netlify.app)

## Installation & Run
To view the app run the following commands:
```
git clone https://github.com/raulduran3/phone-catalog.git
cd phone-catalog/client
yarn install
cd ..
cd server
yarn install
```
Add .env file to server directory with the following parameters:
```
PORT=”your port”
CONNECTION_URL=”your mongo db server” 
```
Open two terminal instances and run the following commands:
```
cd client
yarn start

cd server
yarn start
```

To only run the client, change the url in `phone-catalog/client/api/index.js` to https://phone-catalo.herokuapp.com/phones, and run the following commands:
```
cd client
yarn start
```

## Structure
```
├── phone-catalog
│   ├── client
│   │   ├── src          
│   │   │   ├── actions
│   │   │   │   └── phones.js           // Actions for phones
│   │   │   ├── api
│   │   │   │   └── index.js            // API requests  
│   │   │   ├── components
│   │   │   ├── constants
│   │   │   │   └── actionTypes.js      // Action types for requests for phones
│   │   │   ├── reducers
│   │   │   │   ├── index.js            
│   │   │   │   └── phones.js           // Reducers for phones
│   │   │   ├── views
│   │   │   └── App.js 
│   ├── server
│   │   ├── controllers          
│   │   │   └── phones.js                // Response functions of phones
│   │   ├── models
│   │   │   └── phoneData.js             // Model of phone
│   │   ├── routes
│   │   │   └── phones.js                // Routes for phones
│   │   ├── index.js
│   │   └── Procfile                     // Procfile for deploying to Heroku
```
## API
#### Phone Schema

|   |  |
| - |-|
| name      | String     |
| manufacturer      | String     |
| description      | String     |
| color      | String     |
| price      | Number     |
| imageFileName      | String     |
| screen      | String     |
| processor      | String     |
| ram      | String     |

#### /phones
* `GET` : Get all phones
* `POST` : Create a new phone

#### /phones/:id
* `GET` : Get a phone
* `PATCH` : Update a phone
* `DELETE` : Delete a phone