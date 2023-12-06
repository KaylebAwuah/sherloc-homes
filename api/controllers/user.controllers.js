const test = ((req, res) => {
    res.json({ "meassage": " bacck" })
})

module.exports = { test }

//Function to validate VNIN format (11-digit number)
export const validateVNIN = (vnin: string): boolean => {
    const vninRegex = /^\d{11}$/; // 11-digit number regex
    return vninRegex.test(vnin);
  };
  