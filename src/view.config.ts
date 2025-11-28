import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { fileURLToPath } from 'url';
// import * as hbs from 'hbs';
import { engine } from 'express-handlebars';
export function setupView(app: NestExpressApplication) {
  app.engine('hbs', engine({
    extname: 'hbs',
    partialsDir: join(process.cwd(), 'views', 'partials'), // tuyệt đối từ root
    // layoutsDir: join(process.cwd(), 'views', 'layouts'),
    // defaultLayout: 'main',
    layoutsDir:join(process.cwd(), 'views', 'partials'),
    defaultLayout: false,
  }));

  app.setBaseViewsDir(join(process.cwd(), 'views'));
  app.setViewEngine('hbs');
}
