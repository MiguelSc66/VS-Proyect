const {Users} = require("../../db")

export const getUsers = async () => {
    const findUsers = await Users.findAll({where: {Admin: false}});

    if (findUsers){
        return {status: 200, json: findUsers};

    } else {
        return {status: 404, json: "No se encontraron usuarios registrados"};
    }
};

export const getAdmins = async () => {
    const findAdmins = await Users.findAll({where: {Admin: true}});

    if (findAdmins){
        return {status: 200, json: findAdmins};

    } else {
        return {status: 404, json: "No se encontraron usuarios registrados"};
    }
};

