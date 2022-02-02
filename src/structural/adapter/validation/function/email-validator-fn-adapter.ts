import isEmail from 'validator/lib/isEmail';
import { EmailValidatorFnProtocol } from './email-validator-fn-protocol';

export const EmailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string,
): boolean => {
  return isEmail(value);
};
