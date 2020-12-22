import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
}

export const Button = (props: Props) => {
  const { children, onClick } = props;
  return(
    <button type="button" onClick={onClick}>{children}</button>
  )
}