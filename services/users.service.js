import usersModel from "../models/users.model.js"

const { getAllUsers, postUsers, patchUsers } = usersModel

const getAllUsersManager = async () => {
    return getAllUsers()
}

const postUsersManager = async (user) => {
    return postUsers(user)
}

const patchUsersManager = async (identificador, user) => {
    return patchUsers(identificador, user)
}

export default {
    getAllUsersManager,
    postUsersManager,
    patchUsersManager
 }