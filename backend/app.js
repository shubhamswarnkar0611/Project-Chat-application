const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const UsersRouter = require("./routes/UsersR")

 
app.use(cors());
app.use(bodyParser.json({extended: false}));

app.use(UsersRouter);

sequelize.sync({force: false})
.then((result)=>{
 console.log(result)
 app.listen(4000)

})
.catch((err) => {
    console.log(err)
})