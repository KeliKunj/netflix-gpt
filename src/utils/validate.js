const checkFormValidationData = (email, password) => {
  const isValidEmail = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isValidEmail) return "Invalid Email ID";
  if (!isValidPassword) return "Invalid Password";
  return null;

  //^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$   <-- Full Name Validation
};

export default checkFormValidationData;