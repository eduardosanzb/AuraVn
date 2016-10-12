var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var json = require('express-json');

app.use(express.static('public'));
//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/images'));

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'),function(){
  console.log("Express Started on Port 3000");
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(json());       // to support JSON-encoded bodies
var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
    
    var data = req.body
    var content = req.body.content
    // setup e-mail data with unicode symbols
    var transporter = nodemailer.createTransport('smtps://eduardosanzb@gmail.com:al3xc0rp.46814)@smtp.gmail.com');
    var mailOptions = {
        from: '"AuraVn 👥" <foo@blurdybloop.com>', // sender address
        to: data.mail, // list of receivers
        subject: 'Tus Resultados ✔', // Subject line
        text: 'Gracias por visitarnos, tus resultados son los siguientes:', // plaintext body
        html: '<h1>Tus resultados Velos AuraVn</h1>' + 
              '<h2>Largos: ' + content.largos +'<h2>' + 
              '<h2>Capas: ' + content.capas +'<h2>' + 
              '<h2>Peinetas: ' + content.peinetas +'<h2>' + 
              '<h2>Gama: ' + content.gama +'<h2>'
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

}