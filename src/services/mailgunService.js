const formData = require('form-data');
const Mailgun = require('mailgun.js');

const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: MAILGUN_API_KEY || '123',
  domain: MAILGUN_DOMAIN,
  url: 'https://api.eu.mailgun.net',
});

const sendConfirmationEmail = async (email) => {
  const mailgunData = {
    from: 'contact@connect-store.eu',
    to: email,
    subject: `Thanks for your interest in Connectstore`,
    template: 'connectstore_leads',
  };
  try {
    const response = await mg.messages.create(MAILGUN_DOMAIN, mailgunData);
    console.log({ response });
  } catch (error) {
    console.log({ error });
  }
};

module.exports = { sendConfirmationEmail };
