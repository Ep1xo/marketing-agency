import React from "react";

export const ServiceProposals = ({name, description}) => {

  return (
    <div className="proposal-wrapper">
      <div className="proposal-wrapper-header-part">
        <p className="proposal-wrapper-header-part-name">{name}</p>
        <p className="proposal-wrapper-header-part-btn">learn more</p>
      </div>
      <p className="proposal-wrapper-description-part">{description}</p>
    </div>
  )
}