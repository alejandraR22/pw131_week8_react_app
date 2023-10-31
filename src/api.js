const delay = 500;

export const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, delay)); 
  const response = await fetch('/db.json');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data.users;
};


export const createUser = async (newUser) => {
  await new Promise((resolve) => setTimeout(resolve, delay)); 
  const response = await fetch('/db.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    throw new Error('Failed to create a new user');
  }
  return newUser;
};