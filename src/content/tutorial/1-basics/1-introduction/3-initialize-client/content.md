---
type: lesson
title: Initialize Client
focus: /send-sms.js
---

# Initialize the Client and Variables

In this step, we will intialize the Vonage Client with some credentials and initialize some variables that will be needed later.

Copy this code into `send-sms.js`

```js
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

```