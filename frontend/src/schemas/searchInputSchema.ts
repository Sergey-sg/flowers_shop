import * as Yup from "yup";

export const searchInputSchema = Yup.object({
  requestText: Yup.string()
    .required("required")
    .min(3, "- request must be at least three characters")
    .max(250, "- request must be 250 characters or less"),
});
