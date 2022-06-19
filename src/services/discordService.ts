const WEBHOOK_URL = process.env.WEBHOOK_URL as string;

type WebhookPayload = {
  content: string;
};

const postNewLeadMessage = async (email: string): Promise<void> => {
  try {
    const webhookPayload: WebhookPayload = {
      content: `We got a new lead 🍯: ${email}`,
    };

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(webhookPayload),
    });
  } catch (error) {
    console.log('Discord webhook failed', { error });
  }
};

export { postNewLeadMessage };
