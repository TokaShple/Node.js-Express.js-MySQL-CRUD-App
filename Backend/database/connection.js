import {Sequelize} from "sequelize";
export const connection = new Sequelize("shopping","root","",{
  host:"localhost",
  dialect:"mysql"
})
