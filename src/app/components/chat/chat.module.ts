
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat.routing';
import { MenuModule } from "../menu/menu.module";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SocketIoModule } from 'ngx-socket-io';
import { FileUploadModule } from "../file-upload/file-upload.module";


@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChatRoutingModule,
    MenuModule,
    CarouselModule.forRoot(),
    FileUploadModule,
    SocketIoModule.forRoot({ url: 'http://localhost:9999', options: {} })
    // SocketIoModule.forRoot({ url: 'http://192.168.43.44:9999', options: {} }) temporary
  ],
  entryComponents: [

  ],
  exports: [ChatComponent],
  providers: [],
})
export class ChatModule {}
