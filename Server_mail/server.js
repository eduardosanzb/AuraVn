var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var json = require('express-json');

app.use(express.static('public'));
//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/images'));


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
    console.log(JSON.parse(content));
    //Now we have to filter the largos and the 
    var largos = content.largos //This is a integer array [2,4,5]
    largos = largos.map(function(largo){
      var theResult = ''
      switch(largo) {
        case  1 :
            theResult = 'Blush / Fránces';
            return theResult
        case 2 :
            theResult = 'Hombros'
            return theResult
        case 3 :
            theResult = 'Codos'
            return theResult
        case 4 :
            theResult = 'Dedos'
            return theResult
        case 5 :
            theResult = 'Vals'
            return theResult
        case 6 :
            theResult = 'Capilla'
            return theResult
        case 7 :
            theResult = 'Catedral'
            return theResult
        case 8 :
            theResult = 'Real'
            return theResult
        }
    return theResult
    })
    // setup e-mail data with unicode symbols
    //var transporter = nodemailer.createTransport('smtps://eduardosanzb@gmail.com:al3xc0rp.46814)@smtp.gmail.com');
    var transporter = nodemailer.createTransport('smtps://auravnventas@gmail.com:alexc0rp@smtp.gmail.com');
    //var transporter = nodemailer.createTransport('smtps://ventas@velosynovias.com:n0v14s@gator3307.hostgator.com');
    transporter.verify(function(error, success) {
       if (error) {
            console.log(error);
       } else {
            console.log('Server is ready <to></to> take our messages');
       }
    });
    var mailOptions = {
        from: '"AuraVn 👥" <foo@blurdybloop.com>', // sender address
        to: data.mail, // list of receivers
        subject: 'Tus Resultados ✔', // Subject line
        text: 'Gracias por visitarnos, tus resultados son los siguientes:', // plaintext body
        html: '<h1>Tus resultados Velos AuraVn</h1>' + 
              '<h2>Largos: ' + largos +'<h2>' + 
              '<h2>Capas: ' + content.capas +'<h2>' + 
              '<h2>Peinetas: ' + content.peinetas +'<h2>' + 
              '<h2>Gama: ' + content.gama +'<h2>' + 
              '<table cellspacing="0" cellpadding="0" width="100%">' +
                    '<tr>' +
                      '<td class="mobile-padding" style="text-align:left;">' +
                      '<br>'+
                        'Gracias por tu visita. Porfavor <a style="color: #8064A2;" href="http://velosynovias.com/mx/contact-us" target="_blank">contactanos</a> Con cualquier duda.'+
                      '<br>'+
                      '<br>'+
                      'Aura Velos y Novias'+
                      '<br>'+
                      '<br>'+
                      '<br>'+
                      '</td>'+
                    '</tr>'+
                  '</table>'
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

}

app.listen(5000,function(){
  console.log("Express Started on Port 5000");
});