const express = require('express');
const cors = require('cors')

const expressConfig = require('./config/express');
const dbConnect = require('./config/mongoose');
const { port } = require('./config/constants');

const routes = require('./routes');

const app = express();

expressConfig(app);
app.use(cors())


app.use(routes);

const startserver=()=>{
    try {
        dbConnect()
            .then(console.log('Db is conect'))
            .catch((err) => console.log(`Db error:${err}`));
        
            app.listen(port, () => console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

startserver();
