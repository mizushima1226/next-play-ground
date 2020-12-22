import { ChangeEvent } from "react";

type Props = {
  label: string;
  value: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
  const { label, value, onChange } = props;
  
  return (
    <div>
      <label>
        {label}：<input value={value} onChange={onChange}  />
      </label>
    </div>
  )
}