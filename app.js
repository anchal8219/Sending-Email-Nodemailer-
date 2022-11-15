var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:"anchaljaiswal1341@gmail.com",
        pass:"chbbciahzelzotra"
    }
});

var details={
    from: "anchaljaiswal1341@gmail.com",
    to: ["anchal8219@gmail.com","anchal2011030@akgec.ac.in"],
    subject: "Testing my nodemailer",
    text:"Hello there......Completed this first task of sending mail"
};
transporter.sendMail(details,(err)=>{
    if(err){
        console.log("error!")
    }
    else{
        console.log("email has sent");
    }
});