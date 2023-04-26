const app = require("./app");


//CONFIGURE💡!
require("dotenv").config();

//Allows us to use our PORT
const PORT = process.env.PORT

//LISTEN 🎧!
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})