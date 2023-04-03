declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "@theme/IdealImage" {
  import React from "react";
  import { IdealImageProps } from "react-ideal-image";
  const IdealImage: React.FC<IdealImageProps>;
  export default IdealImage;
}

declare module "*.jpg";
declare module "*.png";
declare module "*.md";
