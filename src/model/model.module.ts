import { Module } from "@nestjs/common/decorators";
import { PrismaService } from "src/prisma/prisma.service";
import { ModelController } from "./model.controller";
import { ModelService } from "./model.service";

@Module({
    imports:[],
    controllers:[ModelController],
    providers:[ModelService,PrismaService]
})

export class ModelModule{}