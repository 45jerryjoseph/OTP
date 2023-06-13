SECTION1: Setting up Backend in Express JS
SECTION2: Creating OTP service
SECTION3: Creating Email Service
SECTION4: Database Persistance
SECTION5: Assembling the services with routes and Controllers

SECTION 3:
We have multiple options for creting Email services 
eg:     AWS SES
        SENDGRID
        NODEMAILER NPM
I would be using the nodemailer npm package to easy the process of sending emails here. For Sendgrid the process is quite lenghty and you need to do a lot of registerations. For AWS SES you need to first get your account out of the Sandbox mode that require provide a large amount of details. Since this is a demo design pattern article I am not going deep into sendgrid and aws ses for simplicity sake .

