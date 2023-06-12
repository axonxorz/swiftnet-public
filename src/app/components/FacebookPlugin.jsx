import React, { useEffect } from "react";

const FacebookPlugin = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.FB?.XFBML.parse();
    }
  }, []);

  return (
    <div
      class="fb-page"
      data-href="https://www.facebook.com/swiftnet.ca/"
      data-width="380"
      data-hide-cover="false"
      data-show-facepile="false"
    ></div>
  );
};

export default FacebookPlugin;
