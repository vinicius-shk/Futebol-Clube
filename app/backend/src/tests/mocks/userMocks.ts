export const tokenReturn = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY5MjI3OTM4fQ.FvWonmxImNMa18ZDmWCWlmRe3XZrynX6PXgokIWWzUY"
};

export const adminReturn = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  };

  export const adminData = {
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