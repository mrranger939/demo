const express = require("express")
const path = require('path');
const publicStaticPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templates/partials');
const viewsPath = path.join(__dirname, '../templates/views');
const app = express();
const ejs = require('ejs');
app.set("view engine", 'ejs')
app.set('views', viewsPath);
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