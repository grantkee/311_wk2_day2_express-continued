const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//declaring routes
let commentRoute = require('./routes/comments')
let contactRoute = require('./routes/contacts')
let productRoute = require('./routes/products')
let vehicleRoute = require('./routes/vehicles')
const port = process.env.PORT || 4001;

//console.log(products)

//pulling in additional js files for organization's sake
app.use('/', express.static('public'));

//using body-parser to serve json-style
app.use(bodyParser.json()); 

app.use(commentRoute)
app.use(contactRoute)
app.use(productRoute)
app.use(vehicleRoute)

//puting listening port down here
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
