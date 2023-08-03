import React, { useEffect } from "react";

const FacebookPlugin = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.FB?.XFBML.parse();
    }
  }, []);

  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/CCLNetworks"
      data-width="380"
      data-hide-cover="false"
      data-show-facepile="false"
    ></div>
  );
};

export default FacebookPlugin;
