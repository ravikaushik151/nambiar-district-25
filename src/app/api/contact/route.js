// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
        return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // e.g. smtp.gmail.com
            port: 465,
            secure: true,
            auth: {
                user: 'ravi.k@imsolutions.mobi',
                pass: '5fC#Wm9i0Y/T',
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <your@email.com>`,
            to: 'destination@email.com',
            subject: 'New Contact Form Submission',
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Failed to send email.' }, { status: 500 });
    }
}
