import { useEffect } from "react";
import { APP_URL } from "@/lib/constants";

const ExternalRedirect = () => {
  useEffect(() => {
    window.location.replace(APP_URL);
  }, []);

  return null;
};

export default ExternalRedirect;
