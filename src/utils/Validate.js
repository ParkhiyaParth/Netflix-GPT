export const checkmsg = (email, password) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );

  if (!emailPattern) {
    return "Email is not valid";
  }
  if (!passwordPattern) {
    return "Password is not valid";
  }
  return "Valid";
};
