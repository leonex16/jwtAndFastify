export const verifyPermissions = (res, user, method) => {
  const permissions = {
    'GET': ['administrator', 'moderator', 'user'],
    'POST': ['administrator'],
    'PUT': ['administrator', 'moderator'],
    'DELETE': ['administrator'],
  };
  const rolesNameUser = user.roles.map( role => role.name );

  for (let indx = 0; indx < permissions[method].length; indx++) {
    const canIt = rolesNameUser.findIndex(roleUser => permissions[method][indx].includes(roleUser));
    if ( canIt !== -1 ) return;
  };

  return res.status(403).send({ message: 'Without sufficient permissions.'});
};