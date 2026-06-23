import * as contactsModel from '../models/contactsModel.js';

export const submitContact = async (req, res, next) => {
  try {
    const contact = await contactsModel.createContact(req.body);
    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};
