import { v4 as uuid4 } from 'uuid';

export const token = uuid4() + uuid4() + uuid4();
