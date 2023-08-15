// require("dotenv").config();
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const { EMAIL_USER, EMAIL_PASS, PORT } = process.env;

// const app = express();
// // CORS settings - place before setting up router
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );
// // Server used to send emails
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

// console.log(EMAIL_USER);

// const allowedOrigins = [`http://localhost:3004`]; // Replace with your frontend URL(s)

// const contactEmail = nodemailer.createTransport({
//   host: "smtp-mail.outlook.com",
//   port: 587, // Use port 587 with STARTTLS encryption
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/connect", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: EMAIL_USER,
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });
