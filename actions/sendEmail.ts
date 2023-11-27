"use server";

const sendEmail = async (formData: FormData) => {
  console.log(formData.get("senderEmail"));
};
