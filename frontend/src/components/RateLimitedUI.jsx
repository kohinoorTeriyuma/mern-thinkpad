import React from "react";

const RateLimitedUI = () => {
  return (
    <div className="p-5 border min-w-1/2 m-6 flex items-center justify-center rounded-4xl bg-green-800">
      <h1 className="text-3xl font-semibold">oops! Too many requests</h1>
    </div>
  );
};

export default RateLimitedUI;
