import { useState } from "react";
import { useQuery } from "react-query";

import { endpoint } from "../../services";

const useFetchImage = () => {
  const [url, setUrl] = useState("");
  const [showCta, setShowCta] = useState(false);

  const { isLoading, error, refetch, isSuccess, status, isFetching } = useQuery(
    "fetchImage",
    async () => {
      const response = await fetch(endpoint);
      if (response.ok) return response;
    },
    {
      enabled: false,
      onSuccess: (result) => {
        setUrl(result?.url);
        setShowCta(true);
      },
    }
  );
  return {
    isLoading,
    error,
    refetch,
    isSuccess,
    status,
    isFetching,
    url,
    showCta,
    setShowCta,
  };
};

export default useFetchImage;
