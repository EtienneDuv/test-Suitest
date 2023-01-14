# test-Suitest
technical test for Suitest company

**Application structure**
```
.
├── errors
├── handlers
├── middlewares
├── routes
├── schema
├── services
│   ├── database
│   └── utils.js
├── validation
│   └── body
└── app.js
``` 

# Run the app

Run Postgre Docker
```
docker run
    --name myPostgresDb
    -p 15455:5432
    -e POSTGRES_USER=user
    -e POSTGRES_PASSWORD=password
    -e POSTGRES_DB=suitest
    -d
    postgres
```

Install dependencies `npm install`

Run the app `npm start`

## Test the endpoints

Either use Postman or similar softwares, or use cURL: 

**Create user** (valid for Windows only)
```
curl --location --request POST localhost:3000/user ^
--header Content-Type: application/x-www-form-urlencoded ^
--data-urlencode password=Password1! ^
--data-urlencode name=EtienneDuv ^
--data-urlencode email=aaaaaaa+test@gmail.com
```

**Add money endpoint**
```
curl --location --request POST localhost:3000/addMoney ^
--header Content-Type: application/x-www-form-urlencoded ^
--data-urlencode accountId=1 ^
--data-urlencode amount=10 ^
--data-urlencode password=Password1!
```


**Withdraw money endpoint**
```
curl --location --request POST localhost:3000/withdrawMoney ^
--header Content-Type: application/x-www-form-urlencoded ^
--data-urlencode accountId=1 ^
--data-urlencode amount=10 ^
--data-urlencode password=Password1!
```
