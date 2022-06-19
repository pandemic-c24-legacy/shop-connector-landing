import { NodeMailgun } from 'ts-mailgun';

const mailer = new NodeMailgun();
mailer.apiKey = process.env.MAILGUN_API_KEY as string;
mailer.domain = process.env.MAILGUN_DOMAIN as string;
mailer.fromEmail = process.env.MAILGUN_SENDER as string;
mailer.fromTitle = 'Thanks for your interest';
mailer.options = {
  host: 'api.eu.mailgun.net',
};
mailer.init();

const sendConfirmationEmail = async (email: string): Promise<void> => {
  try {
    await mailer.send(
      email,
      'Thanks for your interest',
      '',
      {},
      {
        template: 'connectstore_leads',
      }
    );
  } catch (error) {
    console.log({ error });
  }
};

export { sendConfirmationEmail };
