"use server";

export const saveEmail = async (
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  const rawFormData = Object.fromEntries(formData) as { email: string };
  const email = rawFormData.email;

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

    const result = await response.json();
    return {
      success: result.success,
      message: result.message || "Email zapisany",
    };
  } catch (error) {
    console.error("Błąd podczas zapisu emaila:", error);
    return {
      success: false,
      message: "Nie udało się zapisać e-maila. Spróbuj ponownie później.",
    };
  }
};
