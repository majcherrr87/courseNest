import {Body, Controller, Get, Header, HttpCode, Param, Post, Redirect, Res} from '@nestjs/common';
import {UserData} from "../interface/user-data";
import {CreateFoxDto} from "../dto/create-fox.dto";

@Controller('/fox')
export class FoxController {

    @Post('/')
    createFox(
        @Body() newFox: CreateFoxDto
    ): string {
        console.log(newFox)
        return `New Fox ${newFox.name} created `
    }

}
