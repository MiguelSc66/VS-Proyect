const {User} = require("../../db")

const getUsers = async () => {
    const findUsers = await User.findAll({where: {Admin: false}});

    if (findUsers){
        return {status: 200, json: findUsers};

    } else {
        return {status: 404, json: "No se encontraron usuarios registrados"};
    }
};

const getAdmins = async () => {
    const findAdmins = await User.findAll({where: {Admin: true}});

    if (findAdmins){
        return {status: 200, json: findAdmins};

    } else {
        return {status: 404, json: "No se encontraron usuarios registrados"};
    }
};

module.exports = {getUsers, getAdmins}