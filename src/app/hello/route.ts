export async function GET(){
    return new Response("hello world")
}


import cors from "cors"
cors()

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request, res: Response) {
  if (req.method === "POST") {
    cors()
    const data: FormData = await req.json();

    // return new Response('d')

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "alihgad2@gmail.com",
        pass: "lxsvkdicjzseidbq",
      },
    });

    try {
      await transporter.sendMail({
        from: "alihgad2@gmail.com",
        to: data.email,
        subject: "LP projects",
        text: `
          welcome ${data.name} , 
          congratulations , you take your first 
          step to sucssess
          we inform you that we recived your 
          message and will comminucate 
          with you ASAP
          thank you 
          LP projects
        `,
      });

      await transporter.sendMail({
        from: "alihgad2@gmail.com",
        to: "alihgad2@gmail.com",
        subject: "LP projects",
        text: `
          "data":${JSON.stringify(data)}
        `,
      });

      return new Response("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response("Error sending email");
    }
  } else {
    return new Response("Method not allowed");
  }
}
