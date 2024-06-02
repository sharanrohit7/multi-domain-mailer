
let count: number = 1;
export const mailer = async (
  connectionString: any,
  topic: string,
  from_address: string,
  to_address: string,
  mail_subject: string,
  template: any
) => {
  try {
    const info = await connectionString.sendMail({
      from: `${topic}<${from_address}>`, // sender address
      to: to_address, // list of receivers
      subject: mail_subject, // Subject line
      html: template, // html body
    });

    if (info.messageId) {
      console.log(
        "mail count: ",
        count++,
        "Email : ",
        info.accepted,
        "message_id : ",
        info.messageId
      );
    }
  } catch (error) {
    console.log(error);
  }
};
