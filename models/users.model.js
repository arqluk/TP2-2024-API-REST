const users = [
    { id: 1, apellido: "Vilas", nombre: "Guillermo", pais: "Argentina", deporte: "Tenis" },
    { id: 2, apellido: "Navratilova", nombre: "Martina", pais: "Checoslovaquia", deporte: "Tenis" },
    { id: 3, apellido: "Comaneci", nombre: "Nadia", pais: "Rumania", deporte: "Gimnasia" },
    { id: 4, apellido: "Piquet", nombre: "Nelson", pais: "Brasil", deporte: "Automovilismo" },
    { id: 5, apellido: "Woods", nombre: "Tiger", pais: "USA", deporte: "Golf" }
]

const getAllUsers = async () => {
    return users
}

const postUsers = async (user) => {
    user.id = users[users.length - 1].id + 1
    users.push(user)
    return user
}

const patchUsers = async (identificador, user) => {
    const idx = users.findIndex((e) => e.id == identificador)
     const newUser = {...users[idx], ...user}
    users.splice(idx, 1, newUser)
    return "Actualización parcial exitosa."
}

export default {
   getAllUsers,
   postUsers,
   patchUsers
}

