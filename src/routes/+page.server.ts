import mail from '@sendgrid/mail';
import { SENDGRID_API_KEY, RECAPTCHA_SECRET_KEY, EMAIL_TO, EMAIL_FROM } from '$env/static/private';

export const actions = {
	default: async ({ fetch, request }) => {
		mail.setApiKey(SENDGRID_API_KEY);

		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		const recaptcha = data.get('g-recaptcha-response');

		try {
			// Validate recaptcha token
			const recaptchaRes = await fetch(
				`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
				{
					method: 'POST'
				}
			);
			const recaptchaData = await recaptchaRes.json();
			if (!recaptchaData.success || recaptchaData.score < 0.5) {
				return {
					status: 'error',
					message:
						"Oops! Your reCAPTCHA validation didn't go through successfully 🤖 Please try again later."
				};
			}
		} catch (err) {
			return {
				status: 'error',
				message:
					"Oops! Your reCAPTCHA validation didn't go through successfully 🤖 Please try again later."
			};
		}

		const emailMessage = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;

		const emailData = {
			to: EMAIL_TO,
			from: EMAIL_FROM,
			subject: `New message from ${name}`,
			text: message as string,
			html: emailMessage.replace(/\r\n/g, '<br />')
		};

		await mail.send(emailData);

		return {
			status: 'success',
			message: 'Thank you for your email 🤙 I will try to get back to you within a few days.'
		};
	}
};
