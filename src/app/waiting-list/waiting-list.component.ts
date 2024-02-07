import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-waiting-list',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './waiting-list.component.html',
  styleUrl: './waiting-list.component.scss',
})
export class WaitingListComponent implements OnInit {
  @ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  videoPlaying = false;

  private readonly _document = inject(DOCUMENT);

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

  addToWaitingList() {
    const email = this.form.controls.email.value;
    this._document.location.href = `https://magic.beehiiv.com/v1/3d75bac9-f3cf-41d4-ad85-b2ee13c94c8e?email=${email}&redirect_to=https://pbuilder.dev/`;
  }
}
