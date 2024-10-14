'use client'

import type { User } from "@/core/model/User"
import InputText from "../shared/InputText"

export interface FormUserProps {
  user: Partial<User>
  onChange: (user: Partial<User>) => void
  save: () => void
  cancel: () => void
  delete: () => void
}

export default function FormUser(props: FormUserProps) {
  return (
    <div className="flex flex-col gap-5">
      <InputText
        label="Nome"
        type="text"
        value={props.user.name}
        onChange={(e) => { props.onChange?.({ ...props.user, name: e.target.value }) }}
      />
      <InputText
        label="Email"
        type="email"
        value={props.user.email}
        onChange={(e) => { props.onChange?.({ ...props.user, email: e.target.value }) }}
      />
      <InputText
        label="Senha"
        type="password"
        value={props.user.password}
        onChange={(e) => { props.onChange?.({ ...props.user, password: e.target.value }) }}
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button onClick={props.save} className="bg-blue-500 px-4 py-2 text-white font-medium rounded-md">Salvar</button>
          <button onClick={props.cancel} className="bg-zinc-500 px-4 py-2 text-white font-medium rounded-md">Cancelar</button>
        </div>
        <button onClick={props.delete} className="bg-red-500 px-4 py-2 text-white font-medium rounded-md">Excluir</button>
      </div>
    </div>
  )
}