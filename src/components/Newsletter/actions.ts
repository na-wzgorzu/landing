"use server";

import { EmailFormValues } from "@/components/Newsletter";

export const saveEmail = async (formData: EmailFormValues) => {
  const email = formData.email;

  try {
    const response = await fetch(process.env.NEWSLETTER_SHEET_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`Błąd sieci: ${response.status}`);
    }

    await response.json();
  } catch (error) {
    console.error("Błąd podczas zapisu emaila:", error);
  }
};
