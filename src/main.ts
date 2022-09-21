import { CONFIG } from "./common/constants";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  // need winston logger
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get(CONFIG.PORT);

  app.setGlobalPrefix("api/v1");
  // app.useGlobalGuards(
  //   new AuthGuard(usersService, new Reflector(), configService),
  //   new RolesGuard(new Reflector())
  // );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );
  await app.listen(port);
}
bootstrap();
