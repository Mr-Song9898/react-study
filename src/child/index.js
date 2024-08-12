import React, { useEffect } from "react";

function Child() {
  useEffect(() => {
    throw new Error();
  }, []);

  return "child";
}

export default Child;
