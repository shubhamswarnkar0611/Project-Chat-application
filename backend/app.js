const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const UsersRouter = require("./routes/UsersR")
const MessagesRouter = require("./routes/MessagesR")
const Users = require("./models/UsersM");
const Messages = require("./models/MessagesM");

Users.hasMany(Messages);
Messages.belongsTo(Users);
 
app.use(cors()); // handle it correctly read more about it in youtube
app.use(bodyParser.json({extended: false}));

app.use(UsersRouter);
app.use(MessagesRouter);

Users.hasMany(Messages);
Messages.belongsTo(Users);

sequelize.sync({force: false})
.then((result)=>{
 console.log(result)
 app.listen(4000)

})
.catch((err) => {
    console.log(err)
})