import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      const mailOptions = {
        from: "na.wzgorzu.reservation@gmail.com",
        to: "xxx005@gmail.com",
        subject: "Wycena fromatek meblowych",
        text: "Dzien dobry, bardzo prosze o przysłanie wycny formatek z płyty meblowej PE 101 white. Pozdrawiam",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log("Error:", error);
        } else {
          console.log("Email sent: ", info.response);
        }
      });
    } catch (error) {
      console.log(error); //logs any error
    }

    return new NextResponse("Success", {
      status: 200,
    });
  } catch (e) {
    console.log("🚀 :42 e:", e);
    return new NextResponse("Nie znaleziono pliku cennik.html", {
      status: 404,
    });
  }
}
