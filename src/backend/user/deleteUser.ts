"use server"

import RepositoryUser from "./RepositoryUser";

export default async function deleteUser(id: string) {
  return RepositoryUser.delete(id)
}