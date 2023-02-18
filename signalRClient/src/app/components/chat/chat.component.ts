import { Component, OnInit } from '@angular/core';

import { SignalRService } from '../../services/signal-r.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  constructor(public signalRService: SignalRService) { }

  ngOnInit(): void {
    this.signalRService.startConnection();
  }
}