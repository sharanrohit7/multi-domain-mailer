import { mailer } from "./mailer.controller";
import mailData from "./mailData.json";
import { connect1 } from "../config/multiConnect.config";
import { exportertemplate } from "../templates/exporterTemplate";
import { mediaTemplate } from "../templates/mediaTemplate";
import { instituteTemplate } from "../templates/instutueTemplate";
import { nriTemplate } from "../templates/nriTemplate";

const data1 = mailData.data.data1;
const data2 = mailData.data.data2;
const data3 = mailData.data.data3;
const data4 = mailData.data.data4;

export const performActionOnEmail1 = async (email: string) => {
  await mailer(
    connect1,
    data1.topic,
    data1.from_address,
    email,
    data1.mail_subject,
    exportertemplate()
  );
  // await sendMail(email)
  console.log(`Performing action on: ${email}`);
};

export const performActionOnEmail2 = async (email: string) => {
  await mailer(
    connect1,
    data2.topic,
    data2.from_address,
    email,
    data2.mail_subject,
    mediaTemplate()
  );
  // await sendMail(email)
  console.log(`Performing action on MEDIA: ${email}`);
};

export const performActionOnEmail3 = async (email: string) => {
  await mailer(
    connect1,
    data3.topic,
    data3.from_address,
    email,
    data3.mail_subject,
    instituteTemplate()
  );
  // await sendMail(email)
  console.log(`Performing action on INSTITUTES: ${email}`);
};

export const performActionOnEmail4 = async (email: string) => {
  await mailer(
    connect1,
    data4.topic,
    data4.from_address,
    email,
    data4.mail_subject,
    nriTemplate()
  );
  // await sendMail(email)
  console.log(`Performing action on: ${email}`);
};
