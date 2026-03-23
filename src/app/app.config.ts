import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { routes } from './app.routes';
import { AccountBookFill, AlertFill, AlertOutline,UserOutline,TeamOutline,MenuFoldOutline} from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [AccountBookFill,MenuFoldOutline, AlertOutline, AlertFill,UserOutline,TeamOutline];
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideNzIcons(icons)
  ]
};
