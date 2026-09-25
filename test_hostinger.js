const nodemailer = require('nodemailer');

async function testMail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@flightchap.com',
      pass: 'Kaluappu@007',
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"FlightChap" <info@flightchap.com>`,
      to: "info@flightchap.com", 
      subject: "Test from local",
      text: "Testing Nodemailer",
    });
    console.log("Success:", info.messageId);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

testMail();
