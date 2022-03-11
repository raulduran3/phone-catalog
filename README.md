# Phone Catalog :)
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

Both the server and client are deployed in the following sites:
- [Server](https://phone-catalo.herokuapp.com/phones)
- [Client](https://phone-catalog-app.netlify.app)