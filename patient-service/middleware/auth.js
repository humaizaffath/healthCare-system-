import jwt from "jsonwebtoken";
import Patient from "../models/Patient.js";

const auth = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Access denied. No token provided." });
    }

    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const patient = await Patient.findById(decoded.id);
    if (!patient) {
      return res.status(401).json({ success: false, message: "Patient not found. Token invalid." });
    }

    req.patient = patient;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
};

export default auth;
