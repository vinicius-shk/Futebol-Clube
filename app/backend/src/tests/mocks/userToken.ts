export const tokenReturn = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY5MjIxOTI2fQ.J4s8t-Z9-KNBHI619YyDOi_j2c99HGmt32m9MS3SV2A"
};

export const adminReturn = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: 'secret_admin',
  };

export const wrongEmailBody = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'batatinha@admin.com',
  password: 'secret_admin',
};

export const wrongPassBody = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: 'secret_xablau',
};

export const noEmailBody = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  password: 'secret_admin',
};

export const noPassBody = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
};