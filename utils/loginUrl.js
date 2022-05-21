import { token } from 'utils/token';
import { v4 as uuidv4 } from 'uuid';

export const url = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=d092b0cf40e3726bd91eb1401def13b3&code_challenge=${token}&state=${uuidv4()}`;
