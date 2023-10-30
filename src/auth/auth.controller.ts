import { Body, Controller, Delete, Get, Options, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';


import path from 'path';
import { Request, Response } from 'express';


@ApiTags("Auth")
@Controller('auth')
export class AuthController {
    authService: any;
    private validTokens: string[] = [];
    tokenService: any;

    constructor(private AuthService: AuthService){}

    @Post('register')
    async register(@Body() data: RegisterDto) {
        return await this.AuthService.register(data);
    }


    @Post('login')
     async login(@Body() data: LoginDto) {
        return await this.AuthService.login(data);
    }


    @ApiBearerAuth("accessToken")
    @UseGuards(AuthGuard)
    @Get('profile')
    async profile(@Req() req) {
        return await this.AuthService.profile(req.user.id);
    }

    @ApiBearerAuth("accessToken")
    @UseGuards(AuthGuard)
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                avatar: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(
        FileInterceptor('avatar', {
            storage: diskStorage({
                destination: 'public/uploads/image',
                filename: (req, file, cb) => {
                    cb(null, file.originalname);
                },
            }),
        }),
    )
    @Post('avatar')
    async avatar(@Req() req, @UploadedFile() file: Express.Multer.File) {
        return await this.AuthService.uploadAvatar(req.user.id,'/upload/image/'+file.filename);
    }


    
    
}

