const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  try {
    const payload = {
      from: "Digital Marketsquare <no-reply@digitalmarketsquare.com>",
      to,
      subject: subject,
    };

    // Check if content is a React element or a plain string/html
    if (typeof html === "string") {
      payload.html = html;
    } else {
      payload.react = html;
    }

    const { data, error } = await resend.emails.send(payload);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Resend Service Error:", error);
    throw error;
  }
};

module.exports = { sendEmail };
