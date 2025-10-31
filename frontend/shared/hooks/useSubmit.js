import { useState } from "react";
import { toaster } from "../utils/helper";

export const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const submit = async (url, method = "GET", body = null, resetForm) => {
    try {
      setIsLoading(true);
      const options = {
        method,
        headers: { "Content-Type": "application/json" },
      };

      // Sadece body varsa ekle (GET veya DELETE için ekleme)
      if (body && method !== "GET" && method !== "DELETE") {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        toaster("error", data.message);
        return;
      }

      setData(data);
      toaster("success", data.message);

      if (typeof resetForm === "function") resetForm();
    } catch (err) {
      toaster("error", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, submit, data };
};
