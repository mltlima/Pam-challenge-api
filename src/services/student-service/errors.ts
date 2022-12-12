import { ApplicationError } from '@/protocols';

export function invalidCredentialsError(): ApplicationError {
  return {
    name: 'InvalidCredentialsError',
    message: 'verify if name, email, birthdate and contact are correct',
  };
}