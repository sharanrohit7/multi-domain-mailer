import nodemailer from "nodemailer"


export const transporter = nodemailer.createTransport({
  host: process.env.host1,
  port: 465 ,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.user1,
    pass: process.env.pass1,
  },
});