import React, { useState } from "react";

export default function Counter({count}) {
  return (
    <div className="counter">
      {count} items left.
    </div>
  );
}
