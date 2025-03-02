import React from "react";
import ScrollOrganization from "../components/Organizations/ScrollOrganization";
import Programmes from "../components/Homepage/Logo";
import OrganizationHero from "../components/Organizations/OrganizationHero";
import TextParagraph from "../components/Organizations/TextParagraph";

const Organizations = () => {
  return (
    <>
      <OrganizationHero />
      <TextParagraph
        text="Driving Digital Transformation with a Human-Centred Approach"
        paragraph="We believe that true digital transformation starts with people, by creating psychologically safe environments, we empower organisations to embrace change, think differently, and innovate with confidence. Integrating AI and data solutions can be seamless and effective when approached in a human-centred way. We make digital transformation accessible and person-centred, ensuring every solution enhances productivity and complements the human workforce."
      />
      <ScrollOrganization />
      <Programmes />
    </>
  );
};

export default Organizations;
