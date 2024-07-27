const contactModel = require("../models/contactModel");

const saveContact = async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const contact = new contactModel({name, email, message});
      await contact.save();
      res.status(200).json({
        success: true,
        message: "Contact Saved Successfully",
        contact,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Contact Saved Error: " + error.message,
        error,
      });
    }
  };

  module.exports = saveContact;