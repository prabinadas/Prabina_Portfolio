import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Send email to YOU (portfolio owner)
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain later
      to: process.env.CONTACT_EMAIL,                    // Your inbox
      replyTo: email,                                   // Reply goes directly to sender
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Contact Message</title>
          </head>
          <body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background:#000000;padding:32px 40px;">
                        <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888888;">New Message</p>
                        <h1 style="margin:8px 0 0;font-size:22px;font-weight:600;color:#ffffff;letter-spacing:-0.02em;">Portfolio Contact</h1>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:40px;">

                        <!-- Sender info -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                          <tr>
                            <td width="50%" style="padding-right:12px;">
                              <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;">From</p>
                              <p style="margin:0;font-size:15px;font-weight:500;color:#111111;">${name}</p>
                            </td>
                            <td width="50%" style="padding-left:12px;">
                              <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;">Email</p>
                              <p style="margin:0;font-size:15px;color:#111111;">
                                <a href="mailto:${email}" style="color:#000000;text-decoration:none;">${email}</a>
                              </p>
                            </td>
                          </tr>
                        </table>

                        <!-- Subject -->
                        <div style="margin-bottom:28px;">
                          <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;">Subject</p>
                          <p style="margin:0;font-size:15px;font-weight:500;color:#111111;">${subject}</p>
                        </div>

                        <!-- Divider -->
                        <div style="height:1px;background:#f0f0f0;margin-bottom:28px;"></div>

                        <!-- Message -->
                        <div style="margin-bottom:32px;">
                          <p style="margin:0 0 12px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;">Message</p>
                          <p style="margin:0;font-size:15px;line-height:1.7;color:#374151;white-space:pre-wrap;">${message}</p>
                        </div>

                        <!-- Reply CTA -->
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="border-radius:8px;background:#000000;">
                              <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;padding:12px 24px;font-size:13px;font-weight:500;color:#ffffff;text-decoration:none;letter-spacing:0.01em;">Reply to ${name} →</a>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding:24px 40px;border-top:1px solid #f0f0f0;">
                        <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                          This message was sent via your portfolio contact form. 
                          Replying to this email will send your reply directly to ${name}.
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    // Send auto-reply to the sender
    await resend.emails.send({
      from: 'Prabina Das <onboarding@resend.dev>', // Replace with your name + verified domain
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
                    
                    <tr>
                      <td style="background:#000000;padding:32px 40px;">
                        <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888888;">Confirmation</p>
                        <h1 style="margin:8px 0 0;font-size:22px;font-weight:600;color:#ffffff;letter-spacing:-0.02em;">Message Received</h1>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:40px;">
                        <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:1.7;">Hi ${name},</p>
                        <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:1.7;">
                          Thanks for getting in touch! I've received your message and will get back to you within 24–48 hours.
                        </p>
                        <p style="margin:0 0 32px;font-size:15px;color:#374151;line-height:1.7;">
                          In the meantime, feel free to check out my work on GitHub or connect with me on LinkedIn.
                        </p>
                        <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">
                          Best,<br/>
                          <strong style="color:#111111;">Prabina Das</strong>
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:24px 40px;border-top:1px solid #f0f0f0;">
                        <p style="margin:0;font-size:12px;color:#9ca3af;">
                          You're receiving this because you submitted a contact form at prabinadas.dev
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error('Email send error:', error);
    return Response.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}