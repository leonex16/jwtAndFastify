import { Role } from '../models/Role';

export const createRoles = async () => {
  const counterRoles = await Role.estimatedDocumentCount();

  if ( counterRoles > 0 ) return;

  Promise.all([
    new Role({ name: 'user' }).save(),
    new Role({ name: 'moderator' }).save(),
    new Role({ name: 'administrator' }).save(),
  ]);
};