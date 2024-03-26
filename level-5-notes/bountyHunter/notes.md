1. npm init -y

2. npm install express 

3.  npm install uuid 

4. variables at top
    const express = require('express')
    const app = express()
    const {v4:uuidv} = require('uuid')

5.  server listen needs port, cb function
    app.listen(9000, () => console.log("Server is running on Port 9000"))

6. create fake data 
7. create routes 
    .get()
8. run nodemon <filename.js>