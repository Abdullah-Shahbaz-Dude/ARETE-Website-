import React from "react";
import WhatHero from "../components/What We do/WhatHero";
import WhatBanner from "../components/What We do/WhatBanner";

import SlickCarousel from "../components/Homepage/SlickCarousel";

const What = () => {
  return (
    <div>
      <WhatHero />
      <WhatBanner />
      <SlickCarousel />
    </div>
  );
};

export default What;
