import React from "react";
import style from "./button.module.scss";

type Props = { children?: React.ReactNode };

export default function Button(props: Props) {
  return <button className={style.base}>{props.children}</button>;
}
