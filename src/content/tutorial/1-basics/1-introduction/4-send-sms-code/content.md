---
type: lesson
title: Send SMS Code
focus: /send-sms.js
---

# The Code to send an SMS

This code will send the SMS.

Copy into the bottom of `send-sms.js`

```js
vonage.messages.send(
    new SMS(
        'This is an SMS text message sent using the Messages API',
        TO_NUMBER,
        VONAGE_NUMBER,
    ),
)
.then(resp => console.log(resp.messageUUID))
.catch(err => console.error(err));
```
