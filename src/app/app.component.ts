import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  showIntroVideo = true;

  @ViewChild('introVideo') introVideoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.introVideoRef?.nativeElement;
    if (video) {
      video
        .play()
        .catch((err) => {
          console.warn('Video autoplay failed:', err);
          this.showIntroVideo = false;
        });
    }
  }

  onVideoEnd(): void {
    this.showIntroVideo = false;
  }
}
