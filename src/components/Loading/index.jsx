import * as React from "react";
import "./index.scss";

export const Component = () => {
  return (
    <div class="loading">
      <div class="dot-wave">
        <div class="dot-wave__dot"></div>
        <div class="dot-wave__dot"></div>
        <div class="dot-wave__dot"></div>
        <div class="dot-wave__dot"></div>
      </div>
    </div>
  );
};

export const LoadingComponent = Component;
