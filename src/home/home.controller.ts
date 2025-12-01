import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class HomeController {
    @Get()
    @Render("home/index")
    home(){
        return {title: 'Trang chủ'};
    }
}
