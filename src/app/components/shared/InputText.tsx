import type { InputHTMLAttributes } from "react";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputText(props: InputTextProps) {
  return (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <input {...props} className="bg-zinc-800 text-zinc-100 p-2 rounded-md outline-none" />
    </div>
  )
}