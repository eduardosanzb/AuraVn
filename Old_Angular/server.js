var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var path = require('path')
var json = require('express-json');
var dateFormat = require('dateformat');
var now = new Date();
var date = dateFormat(now, "dd/mm/yyyy");
var bodyParser = require('body-parser')


var shortid = require('shortid');

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
console.log(__dirname);
app.use(express.static(path.join(__dirname, '/public')) );
//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/images'));

app.listen(5000,function(){
  console.log("Express Started on Port 5000");
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
app.get('/', function(req, res){
    
    res.sendFile(path.join(__dirname + '/public/index.html'));
})
var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello


function handleSayHello(req, res) {
    
    var data = req.body
    var content = req.body
    console.log(req.body);
    //Now we have to filter the largos and the 
    console.log(content);
    var largos = content.content.largos //This is a integer array [2,4,5]
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
        from: '"Aura Velos y Novias 👥" <ventas@velosynovias.com>', // sender address
        to: data.mail, // list of receivers
	bcc: 'ventas@velosynovias.com',
        subject: 'Resultados para tu velo ideal ✔', // Subject line
        text: 'Gracias por visitarnos, los resultados para tu velo AURA son los siguientes:', // plaintext body
        html: "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" +
"<html xmlns=\"http://www.w3.org/1999/xhtml\">" +
"<head>" +
"    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />" +
"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />" +
"    <title>Aura Velos y Novias Confirmación</title>" +
"    <style type=\"text/css\">" +
"        @import url(http://fonts.googleapis.com/css?family=Lato:400);" +
"        /* Take care of image borders and formatting */" +
"        img {" +
"            max-width: 600px;" +
"            outline: none;" +
"            text-decoration: none;" +
"            -ms-interpolation-mode: bicubic;" +
"        }" +
"        a {" +
"            text-decoration: none;" +
"            border: 0;" +
"            outline: none;" +
"        }" +
"        a img {" +
"            border: none;" +
"        }" +
"        /* General styling */" +
"        td," +
"        h1," +
"        h2," +
"        h3 {" +
"            font-family: Helvetica, Arial, sans-serif;" +
"            font-weight: 400;" +
"        }" +
"        body {" +
"            -webkit-font-smoothing: antialiased;" +
"            -webkit-text-size-adjust: none;" +
"            width: 100%;" +
"            height: 100%;" +
"            color: #37302d;" +
"            background: #ffffff;" +
"        }" +
"        table {" +
"            border-collapse: collapse !important;" +
"        }" +
"        h1," +
"        h2," +
"        h3 {" +
"            padding: 0;" +
"            margin: 0;" +
"            color: #ffffff;" +
"            font-weight: 400;" +
"        }" +
"        h3 {" +
"            color: #21c5ba;" +
"            font-size: 24px;" +
"        }" +
"        .important-font {" +
"            color: #8064A2;" +
"            font-weight: bold;" +
"        }" +
"        .hide {" +
"            display: none !important;" +
"        }" +
"        .force-full-width {" +
"            width: 100% !important;" +
"        }" +
"        .footer a {" +
"            font-size: 24px;" +
"            color: #8064A2;" +
"            margin: 0 3px;" +
"        }" +
"    </style>" +
"    <style type=\"text/css\" media=\"screen\">" +
"        @media screen {" +
"            /* Thanks Outlook 2013! http://goo.gl/XLxpyl*/" +
"            td," +
"            h1," +
"            h2," +
"            h3 {" +
"                font-family: 'Lato', 'Helvetica Neue', 'Arial', 'sans-serif' !important;" +
"            }" +
"        }" +
"    </style>" +
"    <style type=\"text/css\" media=\"only screen and (max-width: 480px)\">" +
"        /* Mobile styles */" +
"        @media only screen and (max-width: 480px) {" +
"            table[class=\"w320\"] {" +
"                width: 320px !important;" +
"            }" +
"            table[class=\"w300\"] {" +
"                width: 300px !important;" +
"            }" +
"            table[class=\"w290\"] {" +
"                width: 290px !important;" +
"            }" +
"            td[class=\"w320\"] {" +
"                width: 320px !important;" +
"            }" +
"            td[class=\"mobile-center\"] {" +
"                text-align: center !important;" +
"            }" +
"            td[class*=\"mobile-padding\"] {" +
"                padding-left: 20px !important;" +
"                padding-right: 20px !important;" +
"                padding-bottom: 20px !important;" +
"            }" +
"            td[class*=\"mobile-block\"] {" +
"                display: block !important;" +
"                width: 100% !important;" +
"                text-align: left !important;" +
"                padding-bottom: 20px !important;" +
"            }" +
"            td[class*=\"mobile-border\"] {" +
"                border: 0 !important;" +
"            }" +
"            td[class*=\"reveal\"] {" +
"                display: block !important;" +
"            }" +
"        }" +
"    </style>" +
"</head>" +
"<body class=\"body\" style=\"padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none\" bgcolor=\"#ffffff\">" +
"    <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" height=\"100%\">" +
"        <tr>" +
"            <td align=\"center\" valign=\"top\" bgcolor=\"#ffffff\" width=\"100%\">" +
"                <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">" +
"                    <tr>" +
"                        <td style=\"border-bottom: 3px solid #8064A2;\" width=\"100%\">" +
"                            <center>" +
"                                <table cellspacing=\"0\" cellpadding=\"0\" width=\"500\" class=\"w320\">" +
"                                    <tr>" +
"                                        <td valign=\"top\" style=\"padding:40px 0 30px 0; text-align:center;\" class=\"mobile-center\">" +
"                                            <img width=\"60%\"  src=\"http://velosynovias.com/img/email/logo.png\">" +
"                                        </td>" +
"                                    </tr>" +
"                                </table>" +
"                            </center>" +
"                        </td>" +
"                    </tr>" +
"                    <tr>" +
"                        <td background=\"http://velosynovias.com/img/email/fondo.jpg\" bgcolor=\"#8b8284\" valign=\"top\" style=\"background: url(http://velosynovias.com/img/email/fondo.jpg) no-repeat center; background-color: #8b8284; background-position: center; background-size: cover;\">" +
"                            <!--[if gte mso 9]>" +
"          <v:rect xmlns:v=\"urn:schemas-microsoft-com:vml\" fill=\"true\" stroke=\"false\" style=\"mso-width-percent:1000;height:303px;\">" +
"            <v:fill type=\"tile\" src=\"https://www.filepicker.io/api/file/kmlo6MonRpWsVuuM47EG\" color=\"#8b8284\" />" +
"            <v:textbox inset=\"0,0,0,0\">" +
"          <![endif]-->" +
"                            <div>" +
"                                <center>" +
"                                    <table cellspacing=\"0\" cellpadding=\"0\" width=\"530\" height=\"303\" class=\"w320\">" +
"                                        <tr>" +
"                                            <td valign=\"middle\" style=\"vertical-align:middle; padding-right: 15px; padding-left: 15px; text-align:left;\" height=\"303\">" +
"                                            </td>" +
"                                        </tr>" +
"                                    </table>" +
"                                </center>" +
"                            </div>" +
"                            <!--[if gte mso 9]>" +
"            </v:textbox>" +
"          </v:rect>" +
"          <![endif]-->" +
"                        </td>" +
"                    </tr>" +
"                    <tr class=\"force-full-width\">" +
"                        <td valign=\"top\" class=\"force-full-width\">" +
"                            <center>" +
"                                <table cellspacing=\"0\" cellpadding=\"0\" width=\"500\" class=\"w320\">" +
"                                  <tr>" +
"                                      <td style=\"padding: 30px 0 0 0;\">" +
"                                          <h1 style=\"text-align:center; color:black\">TU VELO IDEAL </h1><br>" +
"                                      </td>" +
"                                  </tr>" +
"                                    <tr>" +
"                                        <td valign=\"top\" style=\"border-bottom:1px solid #a1a1a1;\">" +
"                                            <table cellspacing=\"0\" cellpadding=\"0\" class=\"force-full-width\">" +
"                                                <tr>" +
"                                                    <td style=\"padding: 30px 0;\" class=\"mobile-padding\">" +
"                                                        <table class=\"force-full-width\" cellspacing=\"0\" cellpadding=\"0\">" +
"                                                            <tr>" +
"                                                                <td style=\"text-align: left;\">" +
"                                                                    <span class=\"important-font\">" +
"                            Hola:" +
"                          </span> "+ data.mail +"" +
"                                                                </td>" +
"                                                                <td style=\"text-align: right; vertical-align:top;\">" +
"                                                                    <span class=\"important-font\">" +
"                            Pedido: "+ shortid.generate() +"<br>" +
"                          </span>"+ date +"" +
"                                                                </td>" +
"                                                            </tr>" +
"                                                        </table>" +
"                                                    </td>" +
"                                                </tr>" +
"                                                <tr>" +
"                                                    <td style=\"padding-bottom: 30px;\" class=\"mobile-padding\">" +
"                                                        <table class=\"force-full-width\" cellspacing=\"0\" cellpadding=\"0\">" +
"                                                            <tr>" +
"                                                                <td class=\"mobile-block\">" +
"                                                                    <table cellspacing=\"0\" cellpadding=\"0\" class=\"force-full-width\">" +
"                                                                        <tr>" +
"                                                                            <td class=\"mobile-border\" style=\"background-color: #8064A2; color: #ffffff; padding: 5px;  text-align:left;\">" +
"                                                                                 Resultados para tu velo \"AURA\"</td>" +
"                                                                            <td style=\"background-color: #8064A2; color: #ffffff; padding: 5px; text-align:left;\">" +
"                                                                        </tr>" +
"                                                                        <tr>" +
"                                                                            <td style=\"background-color: #ebebeb; padding: 8px; border-top: 3px solid #ffffff; border-right: 3px solid #ffffff; text-align:left;\">" +
"                                                                                Largo: </td>" +
"                                                                            <td style=\"background-color: #ebebeb; padding: 8px; border-top: 3px solid #ffffff; text-align:left;\">" +
"                                                                                "+ largos +"" +
"                                                                            </td>" +
"                                                                        </tr>" +
"                                                                        <tr>" +
"                                                                            <td style=\"background-color: #ebebeb; padding: 8px; border-top: 3px solid #ffffff; border-right: 3px solid #ffffff; text-align:left;\">" +
"                                                                                Capas: </td>" +
"                                                                            <td style=\"background-color: #ebebeb; padding: 8px; border-top: 3px solid #ffffff; text-align:left;\">" +
"                                                                                "+ content.capas +" " +
"                                                                            </td>" +
"                                                                        </tr>" +
"                                                                        <tr>" +
"                                                                            <td style=\"background-color: #ebebeb; padding: 8px; border-top: 3px solid #ffffff; border-right: 3px solid #ffffff; text-align:left;\">" +
"                                                                                Peinetas: </td>" +
"                                                                            <td style=\"background-color: #ebebeb; padding: 8px; border-top: 3px solid #ffffff; text-align:left;\">" +
"                                                                                "+ content.peinetas +"" +
"                                                                            </td>" +
"                                                                        </tr>" +
"                                                                        <tr>" +
"                                                                            <td style=\"background-color: #ebebeb; padding: 8px; border-top: 3px solid #ffffff; border-right: 3px solid #ffffff; text-align:left;\">" +
"                                                                                Gama: </td>" +
"                                                                            <td style=\"background-color: #ebebeb; padding: 8px; border-top: 3px solid #ffffff; text-align:left;\">" +
"                                                                                "+ content.gama +"" +
"                                                                            </td>" +
"                                                                        </tr>" +
"                                                                    </table>" +
"                                                                    </td>" +
"                                                            </tr>" +
"                                                        </table>" +
"                                                        </td>" +
"                                                </tr>" +
"                                            </table>" +
"                                            </td>" +
"                                    </tr>" +
"                                    <tr>" +
"                                        <td>" +
"                                            <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">" +
"                                                <tr>" +
"                                                    <td class=\"mobile-padding\" style=\"text-align:left;\">" +
"                                                        <p style=\"color: #37302d\">Gracias por tu visita, por favor <a href=\"http://velosynovias.com\">contáctanos<a> si tienes alguna duda.</p>" +
"                      </td>" +
"                    </tr>" +
"                  </table>" +
"                  <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"margin-bottom: 30px;\">" +
"                  <tr>" +
"                    <td>" +
"                        &nbsp;" +
"                    </td>" +
"                    <td  style=\" width:150px; height:33px; background-color: #8064A2;\" >" +
"                      <div>" +
"                        <a href=\"http://velosynovias.com\" style=\"background-color:#8064A2;border-radius:4px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:150px;-webkit-text-size-adjust:none;\">Contacto</a>" +
"                      </div>" +
"                    </td>" +
"                                                </tr>" +
"                                            </table>" +
"                                        </td>" +
"                                    </tr>" +
"                                </table>" +
"                            </center>" +
"                            </td>" +
"                    </tr>" +
"                    <tr>" +
"                        <td style=\"background-color:#0b0b0b;\" class=\"mobile-padding\">" +
"                            <center>" +
"                                <table cellspacing=\"0\" cellpadding=\"0\" width=\"500\" class=\"w320\">" +
"                                    <tr>" +
"                                        <td>" +
"                                            <table cellspacing=\"0\" cellpadding=\"30\" width=\"100%\">" +
"                                                <tr>" +
"                                                    <td class=\"footer\" style=\"text-align:center;\">" +
"                                                        <a  href=\"http://www.facebook.com/auravelosynovias\">" + 
"                                                             <img width=\"61\" height=\"61\" src=\"http://velosynovias.com/img/email/facebook.png\" alt=\"facebook\" />" +
"                                                        </a>" +
"                                                        <a  href=\"http://www.twitter.com/velosynovias\">" +
"                                                              <img width=\"61\" height=\"61\" src=\"http://velosynovias.com/img/email/twitter.png\" alt=\"twitter\" />" +
"                                                        </a>" +
"                                                        <a  href=\"https://www.pinterest.com/velosynovia\">" +
"                                                               <img width=\"61\" height=\"61\" src=\"http://velosynovias.com/img/email/pinterest.png\" alt=\"pinterest\" />" +
"                                                        </a>" +
"                                                    </td>" +
"                                                </tr>" +
"                                            </table>" +
"                                        </td>" +
"                                    </tr>" +
"                                    <tr>" +
"                                        <td>" +
"                                            <center>" +
"                                                <table style=\"margin:0 0 20px 0;\" cellspacing=\"0\" cellpadding=\"5\" width=\"100%\">" +
"                                                    <tr>" +
"                                                        <td style=\"text-align:center; margin:0 auto;\" width=\"100%\">" +
"                                                            <a href=\"http://velosynovias.com/\" style=\"text-align:center; color: #8064A2;\">" +
"                             velosynovias.com" +
"                           </a>" +
"                                                        </td>" +
"                                                    </tr>" +
"                                                </table>" +
"                                            </center>" +
"                                        </td>" +
"                                    </tr>" +
"                                </table>" +
"                            </center>" +
"                        </td>" +
"                    </tr>" +
"                </table>" +
"                </td>" +
"        </tr>" +
"    </table>" +
"</body>" +
"</html>" }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

}
