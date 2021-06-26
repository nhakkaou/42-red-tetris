const validateName = (name) => {
  if (name.trim() === "") return false;
  if (/[a-zA-Z0-9]{1,12}/.test(name)) return true;
  return false;
};

module.exports = { validateName };
