const { StatusCode } = require("status-code-enum");
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
    res.status(StatusCode.SuccessOK).json(password);
  } catch (error) {
    res
      .status(StatusCode.ServerErrorInternal)
      .json({ error: "Internal Server Error" });
  }
};

module.exports = {
  passGen,
};
