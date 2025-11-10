import { AuthContext } from "@/contexts/auth/auth-context";
import { useState, useContext } from "react";

export const useApiPost = (endpoint: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const auth = useContext(AuthContext);

  const postApi = async (payload: object) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${auth?.token}`,
        },
        body: JSON.stringify(payload),
      });

      const apiData = await res.json();

      if (!res.ok) {
        throw new Error(apiData || "err posting data");
      }

      setData(apiData);
      return { res, datas: apiData }
    } catch (err) {
      setError((err as Error).message);
      return { res: null, data: null, error: (err as Error).message }
    } finally {
      setLoading(false);
    }
  }

  return { postApi, data, loading, error }
}
