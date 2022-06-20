import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import clientPromise from '../../lib/mongodb';
import { postNewLeadMessage } from '../../services/discordService';
import * as mailgunService from '../../services/mailgunService';

const handler = nextConnect();

const validateEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const saveNewLead = async (email: string): Promise<void> => {
  const dbClient = await clientPromise;
  await dbClient
    .db('customerDB')
    .collection('leads')
    .updateOne(
      { email },
      {
        $set: {
          email,
          lastSubmissionAt: new Date(),
        },
      },
      { upsert: true }
    );
};

const processIncomingEmail = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    body: { email },
  } = req;
  try {
    if (!validateEmail(email)) throw new Error('Email not valid');
    await saveNewLead(email);
    await postNewLeadMessage(email);
    await mailgunService.sendConfirmationEmail(email);
    res.send({ message: 'OK' });
  } catch (error) {
    res.send({ message: 'email not submitted', error });
  }
};

handler.post(processIncomingEmail);

export default handler;
