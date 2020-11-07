// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler =  async (event, context, callback) => {

  const data = JSON.parse(event.body)
  const { email, subject } = data

  const body = Object.keys(data).map((k) => {
    return `${k}: ${data[k]}`
  }).join("<br><br>");

  const msg = {
    to: "eonicrj@gmail.com",
    from: "forms@rajrajhans.com",
    subject: subject+': New Entry from Contact Form',
    html: body,
  };

  try{
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Message sent successfully"
    }
  } catch(e){
    return {
      statusCode: e.code,
      body: e.message
    }
  }
};
