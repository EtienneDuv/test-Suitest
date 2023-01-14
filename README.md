# test-Suitest
technical test for Suitest company

**TODO**
- PATCH add money (userId|amount|password)
- PATCH withdraw money (userId|amount|password)

**LATER**
AJV validation

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

run `npm start`