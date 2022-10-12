import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Scopes,
  ForeignKey,
} from "sequelize-typescript";
import { ROLES } from "../../common/enums";
import { Users } from "../users/users.model";

@Scopes(() => {
  return {
    basic: {
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    },
  };
})
@Table({
  tableName: "Orders",
  underscored: true,
  paranoid: true,
  timestamps: true,
})
export class Orders extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.DOUBLE)
  lat: number;

  @Column(DataType.DOUBLE)
  lng: number;

  @Column(DataType.STRING)
  order: string;

  @Column(DataType.INTEGER)
  quantity: number;

  @Column(DataType.ENUM(...Object.values(ROLES)))
  status: string;

  @ForeignKey(() => Users)
  @Column(DataType.INTEGER)
  userId: number;

  @ForeignKey(() => Users)
  @Column(DataType.INTEGER)
  delivererId: number;

  //   @Column(DataType.DATE)
  //   deliveredAt: Date;

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;

  @Column(DataType.DATE)
  deletedAt: Date;

  @Column(DataType.INTEGER)
  updatedBy: number;

  @Column(DataType.INTEGER)
  deletedBy: number;
}
