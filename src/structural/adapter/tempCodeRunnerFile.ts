import isEmail from 'validator/lib/isEmail';

const email = 'myemail@something.com';

if (isEmail(email)) {
  console.log('Valid e-mail');
} else {
  console.log('Invalid e-mail');
}