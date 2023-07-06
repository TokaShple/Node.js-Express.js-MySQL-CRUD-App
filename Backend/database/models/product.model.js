import { connection} from "../connection.js";
import { DataTypes, ForeignKeyConstraintError } from "sequelize";
import { userSchema } from "./user.model.js";
export const productSchema = connection.define("product",{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING(100)
  },
  price:{
    type:DataTypes.INTEGER
  },
  description:{
    type:DataTypes.STRING(100)
  },
},
{
  timestamps: false
})
userSchema.hasMany(
  productSchema,
  {onDelete:"CASCADE",
  onUpdate:"CASCADE"}
  );
productSchema.belongsTo(userSchema);
connection.sync();