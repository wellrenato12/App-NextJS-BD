import type { User } from "@/core/model/User"
import Image from "next/image"

export interface RowUserProps {
  user: User
  onClick?: (user: User) => void
}

export default function RowUser(props: RowUserProps) {
  return (
    <div onClick={() => props.onClick?.(props.user)} className="flex bg-zinc-900 items-center gap-5 rounded-md p-4 cursor-pointer">
      <Image
        src="https://avatars.githubusercontent.com/u/39505479?v=4"
        width={80}
        height={80}
        alt="Avatar"
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-zinc-300 text-xl font-bold">{props.user.name}</span>
        <span className="text-sm text-zinc-400">{props.user.email}</span>
      </div>
    </div>
  )
}