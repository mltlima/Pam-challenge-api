import { ApplicationError } from '@/protocols';

export function invalidCredentialsError(): ApplicationError {
  return {
    name: 'InvalidCredentialsError',
    message: 'verify if name, email, birthdate, contact and userId are correct',
  };
}