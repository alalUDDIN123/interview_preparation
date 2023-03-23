const inputArray = ['abc@gmail.com', 'def@yahoo.com', 'hello@gmail.com'];

const outputArray = inputArray.map(email => {
    const isGmail = email.endsWith('@gmail.com');
    const isYahoo = email.endsWith('@yahoo.com');

    return {
        email: email,
        provider: isGmail ? 'Gmail' : isYahoo ? 'Yahoo' : 'Other'
    };
});

console.log(outputArray);
