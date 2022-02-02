const myEmail = 'myemail@something.com';

//-- legacy
// import isEmail from 'validator/lib/isEmail';

// if (isEmail(email)) {
//   console.log('Valid e-mail (Legacy)');
// } else {
//   console.log('Invalid e-mail (Legacy)');
// }

//-- original adapter implementation (class)
import { EmailValidatorClassAdapter } from './validation/classic/email-validator-class-adapter';
import { EmailValidatorProtocol } from './validation/classic/email-validator-class-protocol';

function validateEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Valid e-mail (Class)');
  } else {
    console.log('Invalid e-mail (Class)');
  }
}

validateEmailClass(new EmailValidatorClassAdapter(), myEmail);

//-- function adapter implementation
import { EmailValidatorFnAdapter } from './validation/function/email-validator-fn-adapter';
import { EmailValidatorFnProtocol } from './validation/function/email-validator-fn-protocol';

function validateEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (EmailValidatorFnAdapter(email)) {
    console.log('Valid e-mail (Fn)');
  } else {
    console.log('Invalid e-mail (Fn)');
  }
}

validateEmailFn(EmailValidatorFnAdapter, myEmail);
