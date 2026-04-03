// import { v2 as cloudinary } from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "patient_reports",
//     allowed_formats: ["jpg", "jpeg", "png", "gif", "webp", "pdf"],
//     resource_type: "auto",
//   },
// });

// export { cloudinary, storage };

import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "healthcare-app/patient_reports",
    allowed_formats: ["jpg", "jpeg", "png", "gif", "webp", "pdf"],
    resource_type: "auto",
    public_id: (req, file) => {
      return `report_${Date.now()}`;
    },
  },
});

export { cloudinary, storage };