import Backend from "@/backend"
import type { User } from "@/core/model/User"
import { useState, useEffect } from "react"

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<Partial<User> | null>(null)

  useEffect(() => {
    Backend.users.getAll().then(setUsers)
  }, [])

  async function save() {
    if (!user) return

    await Backend.users.saveUser(user)
    const users = await Backend.users.getAll()
    setUsers(users)
    setUser(null)
  }

  async function deleteUser() {
    if (!user || !user.id) return

    await Backend.users.deleteUser(user.id)
    const users = await Backend.users.getAll()
    setUsers(users)
    setUser(null)
  }

  return {
    users,
    user,
    save,
    deleteUser,
    cancelar: () => setUser(null),
    alterUser: (user: Partial<User> | null) => setUser(user),
  }
}