"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.enableCors();
    const port = process.env.PORT ? Number(process.env.PORT) : 3000;
    const host = process.env.HOST || '0.0.0.0';
    await app.listen({ port, host });
    const url = await app.getUrl();
    console.log(`🚀 Fastify-Nest app running at ${url}`);
}
bootstrap();
//# sourceMappingURL=main.js.map