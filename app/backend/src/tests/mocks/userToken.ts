export const tokenReturn = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" // Aqui deve ser o token gerado pelo backend.
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