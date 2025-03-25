import { SHA256 } from 'crypto-ts';

export function saltAndHashPassword(password:string): string {
  const salt: string = process.env.PASSWORD_SALT || 'pp-weather'
  const hash: string = SHA256(salt + password).toString()
  return hash
}