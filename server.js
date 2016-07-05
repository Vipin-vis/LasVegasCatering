var express 		= require('express');

var cors  			= require('cors');

var body_parser 	= require("body-parser");

var path 			= require('path');

var mailer          = require("nodemailer");

var app 			= express();


app.use(cors());

app.use(body_parser.json());

app.use(body_parser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


//Send Feed
app.post('/sendfeed', function(req, res){
    
	SendFeed(req);
});


//INCLUDE SUBFILES IN REQUESTED PAGES

app.get('/:file(*)', function(req, res) {
	var file = req.params.file;
    res.sendFile(path.join(__dirname + '/'+ file));
});


//SEND feed

function SendFeed(response){

console.log("response.body.customer_mail: " + response.body.customer_mail)

var smtpTransport = mailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "infocateringser@gmail.com ",
            pass:"catering123"
         
        }
    });

	var html= "<b>"+response.body.customer_mail+"</b><br /><br /><a style='color:red'>"+
				response.body.mail_content+
				"<a/><br /><br />Call: <a style='color:red'>"+
				response.body.customer_contact_number + "<a/>";

    var mail = {
        from: "infocateringser@gmail.com" ,
        to: "vipinvis91@gmail.com",
        subject: response.body.customer_name + "_____Contact",
        text: "Contact",
        html: html
    }

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent!!!");
        }

        smtpTransport.close();
    });

}


app.listen(21);