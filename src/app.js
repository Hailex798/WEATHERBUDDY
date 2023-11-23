const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 1000
//PATHS
const htmlPath = path.join(__dirname, "../public")
const hbsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")


//HANDLEBARS PATH DISPLAY
app.set('view engine', 'hbs')
app.set('views', hbsPath)

//PARTIALS SETUP
hbs.registerPartials(partialsPath)

//STATIC PATH DISPLAY --> EXPRESS  || NO USE NOW
app.use(express.static(htmlPath))

//ROUTING
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/weather", (req, res) => {
    res.render("weather")
})
app.get("*", (req, res) => {
    res.render("404error", {
        errorMsg: "Oops! Page not Found"
    })
    // res.writeHead("404")
    // res.write("404. Page not found.")
    // res.end()
})

app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
})