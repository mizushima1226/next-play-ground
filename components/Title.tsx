import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const Title = (props: Props) => {
  const { children } = props
  return (
    <p>{children}</p>
  )
}