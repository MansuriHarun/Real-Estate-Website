const propertyModel = require("../models/propertySchema");

const createProperty = async (req, res) => {
  try {
    const { title, description, image, contact } = req.body;
    const property = new propertyModel({ title, description, image, contact });
    await property.save();
    res.status(200).json({
      success: true,
      message: "Property Created Successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Property Created Error: " + error.message,
      error,
    });
  }
};

const getProperty = async (req, res) => {
  try {
    const property = await propertyModel.find();
    res.status(200).json({
      success: true,
      message: "Property Found Successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Get Property Error: " + error.message,
      error,
    });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await propertyModel.findById(id);
    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }
    await property.deleteOne();
    res.status(200).json({
      success: true,
      message: "Property Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Property Delete Error: " + error.message,
      error,
    });
  }
};

const getParticularProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await propertyModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Particular Property Found Successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Get Particular Property Error: " + error.message,
      error,
    });
  }
};

const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await propertyModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Property updated successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Update Property Error: " + error.message,
      error,
    });
  }
};

module.exports = {
  createProperty,
  getProperty,
  deleteProperty,
  getParticularProperty,
  updateProperty,
};
