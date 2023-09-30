import { DataTypes  } from "sequelize";
const db = require("../db");

export const Reviews = db.define("Reviews", {
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    comments: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
})

