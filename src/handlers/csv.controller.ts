import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';


const csvFilePath1 = path.join(__dirname, '../files/exporters.csv');
const csvFilePath2 = path.join(__dirname, '../files/media.csv');
const csvFilePath3 = path.join(__dirname, '../files/institutes.csv');
const csvFilePath4 = path.join(__dirname, '../files/nri_data.csv');

export const readCSV1 = () => {
    return new Promise((resolve, reject) => {
        const results:any = [];
        fs.createReadStream(csvFilePath1)
            .pipe(csv({ headers: false }))  // No headers in the CSV file
            .on('data', (data) => results.push(Object.values(data)[0]))  // Get the first value (email)
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => reject(err));
    });
};


export const readCSV2 = () => {
    return new Promise((resolve, reject) => {
        const results:any = [];
        fs.createReadStream(csvFilePath2)
            .pipe(csv({ headers: false }))  // No headers in the CSV file
            .on('data', (data) => results.push(Object.values(data)[0]))  // Get the first value (email)
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => reject(err));
    });
};


export const readCSV3 = () => {
    return new Promise((resolve, reject) => {
        const results:any = [];
        fs.createReadStream(csvFilePath3)
            .pipe(csv({ headers: false }))  // No headers in the CSV file
            .on('data', (data) => results.push(Object.values(data)[0]))  // Get the first value (email)
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => reject(err));
    });
};


export const readCSV4 = () => {
    return new Promise((resolve, reject) => {
        const results:any = [];
        fs.createReadStream(csvFilePath4)
            .pipe(csv({ headers: false }))  // No headers in the CSV file
            .on('data', (data) => results.push(Object.values(data)[0]))  // Get the first value (email)
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => reject(err));
    });
};