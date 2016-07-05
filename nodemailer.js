var mailer = require("nodemailer");

    // Use Smtp Protocol to send Email
    var smtpTransport = mailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "infocateringser@gmail.com ",
            pass:"catering123"
         
        }
    });

    var mail = {
        from: "vipinvis@gmail.com",
        to: "infocateringser@gmail.com ",
        subject: "Order ID",
        text: "Order",
        html: "<b>Catering Service</b>"
    }

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close();
    });