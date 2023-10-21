const server = require('./src/server')
const {conn} = require("./src/db");
const {PORT} = require("./config");

conn.sync({force: false}).then(() => {
  server.listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`); // eslint-disable-line no-console
  });
}).catch(error => console.error(error))
