export const checkValidData = (email, password, name) => {

  const isEmailValid =
    /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const isNameValid =
    /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);


  if (name !== null) {
    if (name === "") return "Name is required";

    if (!isNameValid) return "Enter a Valid Name";
  }
    
  if (!isEmailValid) return "Email Id is not Valid";

  if (!isPasswordValid) return "Password is not Valid";

  return null;
};