const { Vonage } = require('@vonage/server-sdk');
const { SMS } = require('@vonage/messages');

const TO_NUMBER = ''
const VONAGE_NUMBER = process.env.VONAGE_NUMBER;
let privateKey;

if (process.env.PRIVATE_KEY) {
    privateKey = process.env.PRIVATE_KEY
} else if (process.env.PRIVATE_KEY64){
    privateKey = Buffer.from(process.env.PRIVATE_KEY64, 'base64');
}
  
const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
  applicationId: process.env.VONAGE_APPLICATION_ID,
  privateKey: privateKey,
});
