import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const email2="lalamiffy2@gmail.com"

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
 
  console.log('Using API Key:', process.env.RESEND_API_KEY);
  console.log('Using email:', process.env.FROM_EMAIL);
  try {

    
    const data = await resend.emails.send({
      from: fromEmail,
      to: [email2],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{email}{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
    
  }
}
