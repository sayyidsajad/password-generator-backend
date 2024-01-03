const generator = require("generate-password");

const passGen = async (req, res) => {
  try {
    const { length, charsLower, charsUpper, charsNumeric, charsSymbols } =
      req.body;
    const password = generator.generate({
      length: length,
      numbers: charsNumeric,
      uppercase: charsUpper,
      symbols: charsSymbols,
      lowercase: charsLower,
    });
    console.log(password);
    res.status(200).json("Success");
  } catch (error) {
    console.error("Error in generateSomething:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  passGen,
};
