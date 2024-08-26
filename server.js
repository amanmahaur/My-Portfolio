const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, tel } = req.body;

    // Configure the transporter with your email service
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or any other email service you use
        auth: {
            user: 'amanmahaur056@gmail.com@gmail.com',
            pass: '0s0s0',
        },
    });

    // Configure email options
    const mailOptions = {
        from: email,
        to: 'amanmahaur056@gmail.com.com', // Your receiving email address
        subject: `Contact Form Submission from ${name}`,
        text: `You have a new message from ${name} (${email}, ${tel})`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error: ' + error.message);
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
