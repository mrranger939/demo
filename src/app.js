const express = require("express")
const path = require('path');
const publicStaticPath = path.join(__dirname, '../public');

const temp_path = path.join(__dirname, "../views")
const app = express();
const ejs = require('ejs');
app.set("view engine", 'ejs')
app.set('views', temp_path);
app.use(express.urlencoded({extended: true}));
app.use(express.static(publicStaticPath));





/* rendering the pages */

app.get("/", (req, res)=>{
    res.render("index")
})

/* rendering the pages */


/* listening to the port here */
app.listen(process.env.PORT || 8000, ()=>{
    console.log("app started listening at port 8000")
})
/* listening to the port here */