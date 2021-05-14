exports.allAccess = (req, res) => {
  res.status(200).send("Public Access.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Access.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Access.");
};

