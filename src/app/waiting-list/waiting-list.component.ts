import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-waiting-list',
  standalone: true,
  imports: [],
  templateUrl: './waiting-list.component.html',
  styleUrl: './waiting-list.component.scss',
})
export class WaitingListComponent implements OnInit {
  @ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>;
  videoPlaying = false;

  constructor() {}

  ngOnInit() {}

  async togglevideo() {
    if (!this.videoPlaying) {
      await this.video.nativeElement.play();
      await this.video.nativeElement.requestFullscreen();
      this.videoPlaying = true;
    } else {
      this.video.nativeElement.pause();
      this.videoPlaying = false;
    }
  }

  toggleTheme() {
    const theme =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
