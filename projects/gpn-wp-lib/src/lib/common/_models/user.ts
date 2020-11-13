/**
 * Данные текущего пользователя.
 */
export class User {
  DEFAULT_ROLE = 'Пользоватлель';
  token: string;
  login: string;
  email: string;
  role: string;
  personalPhoto: string;
  nameFormated: string;
}
