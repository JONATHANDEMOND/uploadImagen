import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatServiceService } from '../../services/chat-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-chat-boot',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './chat-boot.component.html',
  styleUrl: './chat-boot.component.css'
})

  export class ChatBootComponent  {
    messages: any;
    inputText: string = '';
    item:any;
    user:any;
    text:any;

  
    constructor(private chatService: ChatServiceService) {}
  
  
  
    sendMessage(): void {
      if (this.inputText.trim() !== '') {
        this.messages.push({ text: this.inputText, user: true });
        this.chatService.sendMessage(this.inputText).subscribe(response => {
          this.messages.push({ text: response, user: false });
        });
        this.inputText = '';
      }
    }
  }


