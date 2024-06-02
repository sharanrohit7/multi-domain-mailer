import express, { Request, Response, json } from "express";
import { readCSV1, readCSV2, readCSV3, readCSV4 } from "./handlers/csv.controller";
import { processEmails1, processEmails2, processEmails3, processEmails4 } from "./handlers/process.controller";

const app = express();

const main = async () => {
  try {
    let email1: any = await readCSV1();
    processEmails1(email1, 10000); // Set interval to 120000 milliseconds (2 minutes)
  
    let email2: any = await readCSV2();
    processEmails2(email2, 13000);
 
    let email3: any = await readCSV3();
    processEmails3(email3, 16500);

    let email4: any = await readCSV4();
    processEmails4(email4, 20005);
  } catch (error) {
    console.error("Error:", error);
  }
};

main()

export default app;
