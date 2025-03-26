import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import styles from "./Button.module.css";

/**
 * Props for `Button`.
 */
export type ButtonProps = SliceComponentProps<Content.ButtonSlice>;

/**
 * Component for "Button" Slices.
 */
const Button: FC<ButtonProps> = ({ slice }) => {
  return (
    <PrismicNextLink
      field={slice.primary.button_link}
      className={styles.link}
    />
  );
};

export default Button;
