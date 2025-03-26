import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ImageP`.
 */
export type ImagePProps = SliceComponentProps<Content.ImagePSlice>;

/**
 * Component for "ImageP" Slices.
 */
const ImageP: FC<ImagePProps> = ({ slice }) => {
  return <PrismicNextImage field={slice.primary.imagetest} alt="" />;
};

export default ImageP;
