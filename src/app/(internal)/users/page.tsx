'use client'

import Pagina from "@/app/components/template/Pagina";
import Title from "@/app/components/template/Title";
import FormUser from "@/app/components/user/FormUser";
import ListUser from "@/app/components/user/ListUser";
import useUsers from "@/app/data/hooks/useUsers";
import { IconPlus, IconUser } from "@tabler/icons-react";

export default function Page() {
  const { user, users, save, deleteUser, alterUser } = useUsers()

  return (
    <Pagina className="flex flex-col gap-10">
      <Title icon={IconUser} primary="Usuários" secondary="Cadastro de usuários" />

      {user ? (
        <FormUser
          user={user}
          onChange={alterUser}
          cancel={() => { alterUser(null) }}
          save={save}
          delete={deleteUser}
        />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              className="flex items-center gap-2 text-zinc-100 bg-blue-500 px-4 py-2 rounded-md"
              onClick={() => alterUser({})}
            >
              <IconPlus />
              <span>Novo Usuário</span>
            </button>
          </div>
          <ListUser users={users} onClick={alterUser} />
        </>
      )}
    </Pagina>
  )
}

