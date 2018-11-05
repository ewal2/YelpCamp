var api_key = '3a2c1e4d3ae3bd408b5d78c8508f6be4-a3d67641-0b43a82a';
var domain = 'sandboxd059a61bddcf4eb088b9e2accd83d95f.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Ewa <lorecka.ewa@gmail.com>',
  to: 'lorecka.ewa@gmail.com',
  subject: 'Hello world',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
    if(error){
      console.log(error);
    }
  console.log(body);
});