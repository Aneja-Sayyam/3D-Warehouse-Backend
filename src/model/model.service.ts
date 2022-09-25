import { Injectable } from "@nestjs/common/decorators";
import { PrismaService } from "src/prisma/prisma.service";
import {Model,Prisma} from '@prisma/client' 

@Injectable()
export class ModelService{
    constructor(private prisma:PrismaService){}

    async createModel(data:Prisma.ModelCreateInput):Promise<Model>{
        return this.prisma.model.create({
            data
        })
    }

    async getModels(){
        return this.prisma.model.findMany()
    }

    async getModelById(id:string):Promise<Model|null>{
        return this.prisma.model.findUnique({
            where: {id}
        })
    }

    async deleteModelById(id:string):Promise<Model|null>{
        return this.prisma.model.delete({
            where:{ id }
        })
    }
    
}
