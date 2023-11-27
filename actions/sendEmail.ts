"use server";
import { Resend } from "resend";
import { validateStr, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if(!validateStr(senderEmail, 500)){
    return {
      error: 'Invalid sender email'
    };
  }

  if(!validateStr(message, 5000)){
    return {
      error: 'Invalid message'
    };
  }

  let data;
  try{
    data = resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'quirogamanuel123@gmail.com',
      subject: 'Message from contact form',
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
     return {
       error: getErrorMessage(error),
     };
  }

  return{
    data,
  };
};
