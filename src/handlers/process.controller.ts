import { performActionOnEmail1, performActionOnEmail2, performActionOnEmail3, performActionOnEmail4 } from "./performAction";


export const processEmails1 = (emails:any, interval:number) => {
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < emails.length) {
            performActionOnEmail1(emails[index]);  // Directly use the email from the list
            console.log("email index is:",emails[index])
            index++;
            
        } else {
            clearInterval(intervalId);
        }
    }, interval);
};


export const processEmails2 = (emails:string, interval:number) => {
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < emails.length) {
            performActionOnEmail2(emails[index]);  // Directly use the email from the list
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, interval);
};


export const processEmails3 = (emails:string, interval:number) => {
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < emails.length) {
            performActionOnEmail3(emails[index]);  // Directly use the email from the list
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, interval);
};



export const processEmails4 = (emails:string, interval:number) => {
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < emails.length) {
            performActionOnEmail4(emails[index]);  // Directly use the email from the list
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, interval);
};