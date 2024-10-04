import usersService from "../services/users.service.js";

const { getAllUsersManager, postUsersManager, patchUsersManager} = usersService

const getAllUsers = async (req, res) => {
    const users = await getAllUsersManager()
    res.status(200).send(users)
}

const postUsers = async (req, res) => {
    const user = req.body
    if( JSON.stringify(req.body) == "{}") {
        throw new Error("El objeto no tiene los parámetros válidos")
    }
    const newUser = await postUsersManager(user)
    res.send(newUser)
}

const patchUsers = async (req, res) => {
    const {id} = req.params
    const data = req.body
    const patchUser = await patchUsersManager(id, data)
    res.send(patchUser)
}

export default {
   getAllUsers,
   postUsers,
   patchUsers
}