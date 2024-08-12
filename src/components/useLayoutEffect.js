import React, { useEffect, useLayoutEffect } from "react";

export default function LayoutEffect() {
  useEffect(() => {
    console.log('useEffect=>> ', 1111);
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect ', 0);
  }, []);
  return (<div>11</div>);
}