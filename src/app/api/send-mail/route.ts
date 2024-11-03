import nodemailer from "nodemailer";

console.log("Email");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zaryabimran222@gmail.com",
    pass: "dnlazjzyjbfltpgm",
  },
});

const mailOptions = {
  from: "zaryabimran222@gmail.com",
  to: "zaryabimran222@gmail.com",
  subject: "Sending Email using Node.js + Next JS",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
