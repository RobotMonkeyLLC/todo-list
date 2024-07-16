import React, { useState } from "react";

export default function Counter({count}) {
  return (
    <div className="counter col-5">
      {count} items left.
    </div>
  );
}
