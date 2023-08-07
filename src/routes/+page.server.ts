import mail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		mail.setApiKey(SENDGRID_API_KEY);

		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		const emailMessage = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;

		const emailData = {
			to: 'chadmurodev@gmail.com',
			from: 'chadmuroportfolio@gmail.com',
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
