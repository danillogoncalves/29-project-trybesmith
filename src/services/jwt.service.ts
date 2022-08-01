import { sign, verify } from 'jsonwebtoken';
import { UserPublic } from '../interfaces/user.interface';

export default {
  sign: (user: UserPublic) => sign(user, 'minhaSenhaSuperSenha123456', { expiresIn: '7d' }),
  verify: (token: string) => verify(token, 'minhaSenhaSuperSenha123456'),
};
