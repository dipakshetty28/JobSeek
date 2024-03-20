import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dd9rbuuvm",
  api_key: "278789922744876",
  api_secret: "k38MYF3skYPyBh0W0oHQQAGWcXs",
});

app.listen(4000, () => {
  console.log(`Server running at port 4000`);
});
