import { Controller,UseInterceptors, UploadedFile,Get,Post,Param,Body } from "@nestjs/common";
import {ModelService} from './model.service'
import {Model} from "@prisma/client"
import { FileInterceptor } from "@nestjs/platform-express";
import {v4} from 'uuid'
import { diskStorage } from "multer";
import path, { extname } from "path";
import { unlinkSync } from "fs";

@Controller('api')
export class ModelController{
    constructor(private readonly modelService:ModelService){}

    @Post('createModel')
    @UseInterceptors(FileInterceptor('file',{
        storage:diskStorage({
            destination:'./public',
            filename:(req,file,cb)=>{
                const fileId = v4()
                cb(null,`${fileId}${extname(file.originalname)}`)
            }
        })
    }))
    createModel(@UploadedFile() file ,@Body() reqBody:{ title:string,description:string}):Promise<Model>{
        const {description,title} = reqBody
        const fileName = file.filename
        // console.log(file)
        const newModel = this.modelService.createModel({title,description,fileName})

        return newModel
    }

    @Post('getModel')
    getModelById(@Body('id') id:string):Promise<Model>{
        return this.modelService.getModelById(id)
    }

    @Get('getModels')
    getModels():Promise<Model[]>{
        return this.modelService.getModels()
    }

    @Post('deleteModel')
    deleteModelById(@Body('id') id:string):Promise<Model>{
        const deletedModel = this.modelService.deleteModelById(id).then(res=>{
            const filePath = `./public/${res.fileName}`
            unlinkSync(filePath)
            return res

        })
        return deletedModel
    }

}