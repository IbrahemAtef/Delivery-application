import { ConfigService } from "@nestjs/config";
import { Sequelize } from "sequelize-typescript";
import { CONFIG } from "../../common/constants";
import { Users } from "../users/user.model";

export const databaseProviders = [
  {
    provide: CONFIG.SEQUELIZE,
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(CONFIG.DATABASE),
        sync: { force: false },
      });
      sequelize.addModels([Users]);
      return sequelize;
    },
    inject: [ConfigService],
  },
];
