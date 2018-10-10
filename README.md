# backend-mock
A simple backend mock implemented with NodeJS using Express.

# How to run it
Just install npm dependencies with `npm install` and run it with `node index.js`

# Mock data
A single file `data/sample.json` exists and data is selected (if required) as specified in the query string parameter `what`. For example:
* http://localhost:3000 returns default data.
* http://localhost:3000?what=apps returns `apps` data.
* http://localhost:3000?what=langs returns `langs` data.