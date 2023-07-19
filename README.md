# luhn-algo

## Project structure

1. `client` folder
   - react (frontend codes)
1. `server` folder
   - nestjs (backend codes)

## Technologies

1. `client`
   - react 18.2 with vite 4.4
   - Tailwind CSS
1. `server`
   - nestjs framework 9.0.0
   - nodejs 18.12.1
   - Twilio for SMS and Whats app
   - mailgun for email (sendgrid was not available)

## How to run in local?

### Requirement

1. node version 18.12.1

### steps

1. `client` folder
   - run `npm i` inside the folder
   - run `npm run dev` to run in dev mode
   - the default url in `http://localhost:5173`
1. `server` folder
   - run `npm i` inside the folder
   - run `npm start` to run
   - or run `npm run start:dev` to run in dev mode
   - the default url in `http://localhost:3000`
   - open the api in swagger `http://localhost:3000/api`

![Swagger](/z_images/swagger.jpg "Swagger")

## Features introduced

1. Credit card validation using [luhn algorithm](en.wikipedia.org/wiki/Luhn_algorithm)
2. Google Recaptcha integration
3. Email, SMS and What's app the verification result
4. Credit card validation by replying to SMS and What's app
5. Professional and responsive UI
6. HTML Email

## \*\*Caution

- Please do not use any real credit card number as I am using twilio which may save your card number

## Details

### Landing page

![Landing page](/z_images/landing.jpg "Landing page")

### Landing page Credit card

![Validated Landing page](/z_images/validated-landing.jpg "Validated Landing page")

### Email

- the sender is my domain (it's my own domain)
- The Email HTML is in `server/email` folder
- There is a button in the email. It will be green for valid card and red for invalid card.
- If one `click` on the green button, new tab will be launched with the website url
- for that please check the entry in `server/.env` file. The key is `REACT_DEPLOYED_URL`


### Send SMS

- Email, SMS and Whats app can be send once the card is verified. Both for valid and invalid card.
- SMS and Whats app no should be in international format
- Twilio trial account is being used for SMS and Whats app.
- Unless your mobile number is verified with twilio you wont receiving any sms. If you would like to test this feature, please let me know.
- Please do not use any real credit card number as I am using twilio which may save your card number


### Received SMS


### Credit card verification by sending SMS

- One can verify the card by sending only the card no to twilio no
- I have configured webhook to process the card no and sent back the result via twilio.
- This happens within 5/10 seconds
- But to avail this feature one's mobile no needs to be verified with twilio as I am using twilio trial account
- Please do not use any real credit card number as I am using twilio which may save your card number

### Whats app

- One can integrate whats app using this sandbox number
- Please do not use any real credit card number as I am using twilio which may save your card number

