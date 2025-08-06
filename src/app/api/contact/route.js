// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
        return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'sg1-cl9-ats3.a2hosting.com',
            port: 2525,
            secure: false, // use SSL
            auth: {
                user: 'noreply@nambiardistrict25.live',
                pass: '4C-,tvSe]9xZk4(&',
            },
            tls: {
                rejectUnauthorized: false, // <-- add this line
            }
        });


        await transporter.sendMail({
            from: `"nambiar-district-25"`,
            to: 'noreply@nambiardistrict25.live',
            subject: 'Enquiry from Nambiar District 25 - Landing Page',
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
