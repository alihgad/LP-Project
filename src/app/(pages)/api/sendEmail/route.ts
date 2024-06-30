import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Sender =  async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message }: FormData = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'alihgad2@gmail.com',
        pass: 'lxsvkdicjzseidbq',
      },
    });

    try {
      await transporter.sendMail({
        from: 'alihgad2@gmail.com',
        to: `${email}`,
        subject: 'New Form Submission',
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default Sender