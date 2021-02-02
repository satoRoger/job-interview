import React from "react";
import style from "./linkText.module.scss";

type Props = { children?: React.ReactNode };

export default function LinkText(props: Props) {
  return <a className={style.base}>{props.children}</a>;
}
