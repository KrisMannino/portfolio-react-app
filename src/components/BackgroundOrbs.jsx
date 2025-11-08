import React from "react";

const BackgroundOrbs = () => {
  return (
    <div className="bg-orbs pointer-events-none" aria-hidden="true">
      {/* Fewer, bigger, very transparent */}
      <span className="orb" />
      <span className="orb" />
      <span className="orb" />
      <span className="orb" />
      <span className="orb" />
      <span className="orb" />
    </div>
  );
};

export default BackgroundOrbs;
