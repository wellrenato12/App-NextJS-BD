import RowUser from "./RowUser";
import type { User } from "@/core/model/User";

export interface ListUserProps {
  users: User[];
  onClick?: (user: User) => void
}

export default function ListUser(props: ListUserProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.users.map((user) => {
        return <RowUser key={user.id} user={user} onClick={props.onClick} />
      })}
    </div>
  )
}