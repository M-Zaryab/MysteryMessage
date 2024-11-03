import nodemailer from "nodemailer";
import { VERIFICATION_EMAIL_TEMPLATE } from "../../emails/verificationEmailTemplete";

export async function sendVerficationEmail(
  email: string,
  username: string,
  verifyCode: string
) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zaryabimran222@gmail.com",
        pass: "dnlazjzyjbfltpgm",
      },
    });

    const mailOptions = {
      from: "zaryabimran222@gmail.com",
      to: email,
      subject: "Mystery Message | Verification Code",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verifyCode
      ),
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return { success: true, message: "Verification email send successfully. " };
  } catch (error) {
    return { success: false, message: "Failed to send verification Email. " };
  }
}

// import { resend } from "@/lib/resend";
// import VerificationEmail from "../../emails/verificationEmail";
// import { ApiResponse } from "@/types/ApiResponse";

// export async function sendVerficationEmail(
//   email: string,
//   username: string,
//   verifyCode: string
// ): Promise<ApiResponse> {
//   try {
//     await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: email,
//       subject: "Mystery Message | Verification Code",
//       react: VerificationEmail({ username, otp: verifyCode }),
//     });

//     return { success: true, message: "Verification email send successfully. " };
//   } catch (error) {
//     return { success: false, message: "Failed to send verification Email. " };
//   }
// }
