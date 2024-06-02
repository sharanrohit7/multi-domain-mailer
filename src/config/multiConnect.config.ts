import nodemailer from "nodemailer"

export const connect1 = nodemailer.createTransport({
    host: process.env.host1,
    port: 465 ,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.user1,
      pass: process.env.pass1,
    },
  });


  export const connect2 = nodemailer.createTransport({
  host: process.env.host2,
  port: 465 ,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.user2,
    pass: process.env.pass2,
    },
  });


  export const connect3 = nodemailer.createTransport({
    host: process.env.host3,
    port: 465 ,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.user3,
      pass: process.env.pass3,
    },
  });


  export const connect4 = nodemailer.createTransport({
    host: process.env.host4,
    port: 465 ,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.user4,
      pass: process.env.pass4,
    },
  });

  