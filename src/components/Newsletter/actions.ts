"use server";

export const saveEmail = async (formData: FormData) => {
  const rawFormData = Object.fromEntries(formData);
  console.log("🚀 :12 rawFormData:", rawFormData);
};
