function isValidPassword(password) {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  return (
    password.length >= 8 &&
    hasLowercase &&
    hasUppercase &&
    hasNumber &&
    hasSpecial
  );
}

module.exports = isValidPassword;
