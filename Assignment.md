# Backend test (nodejs)

Prepare an application written for node.js. 
It should simulate a banking application with account creation, money withdrawal and deposit. 
Account balance must not be lower than zero. 
Each user can modify only his own account balance. 
Even though the specs are simple write the code the way that can be used in production.

- We expect that code will contain processing of http requests, you can use native http module
or express package.
- For database operations pg package must be used. Program can assume that database is
ready to use (no need to initialize schema on start). PostgreSQL version is 13 or 14.
- The code should be written for node.js 14/16, so modern version of JS is expected.
- Feeds - all communication is done in JSON
  - creating user account: input is name, email and password
    - as a result account id is returned
  - feed for money withdrawal: input is account id, amount and password
  - feed for money deposit: input is account id, amount and password

**As the output we expect:**
- working clean code
- database schema written in SQL language so we can execute it on db i.e. it will contain
CREATE TABLE
- in case of some code is needed but it would take much time to implement it please add at
least comment to the correct position with notes what should be handled by missing code.
