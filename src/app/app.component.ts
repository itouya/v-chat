import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  peer: any;
  localStream: any;

  ngOnInit() {
    navigator.mediaDevices.getUserMedia({audio: true, video: true})
      .then(stream => {
        let element: any;
        element = $('#my-video').get(0) as HTMLMediaElement;
        element.srcObject = stream;
      });
    this.peer = new Peer({key: 'af210551-c65c-4a73-bc1e-0ae11a02b32e', debug: 3});
    this.peer.on('open', (id) => {
      console.log('peer.id: ' + id);
    });
  }
}
