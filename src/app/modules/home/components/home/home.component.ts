import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent  implements AfterViewInit {
  slides = [
    {
      title: 'slider.title1',
      button: 'slider.button1',
      image: 'assets/image/slider_1.jpg'
    },
    {
      title: 'slider.title2',
      button: 'slider.button2',
      image: 'assets/image/slider_2.jpg'
    },
    {
      title: 'slider.title3',
      button: 'slider.button3',
      image: 'assets/image/slider_3.jpg'
    },
    {
      title: 'slider.title4',
      button: 'slider.button4',
      image: 'assets/image/slider_4.jpg'
    },
    {
      title: 'slider.title5',
      button: 'slider.button5',
      image: 'assets/image/slider_5.jpg'
    }
  ];

  icons = [
    'fas fa-city',
    'fas fa-paint-roller',
    'fas fa-user-tie',
    'fas fa-shield-alt',
    'fas fa-child',
    'fas fa-hands-helping'
  ];
  slidessecond = [
    {
      stats: "20+",
      statsDescription: "statsSlider.slide1.description",
      button: "statsSlider.slide1.button",
      image: "assets/image/slider_4.jpg"
    },
    {
      stats: "25+",
      statsDescription: "statsSlider.slide2.description",
      button: "statsSlider.slide2.button",
      image: "assets/image/slider_5.jpg"
    },
    {
      stats: "30+",
      statsDescription: "statsSlider.slide3.description",
      button: "statsSlider.slide3.button",
      image: "assets/image/slider_6.jpg"
    }
  ];

ngAfterViewInit(): void {
  const swiperEl: any = document.querySelector('swiper-container');

  if (swiperEl) {
    swiperEl.params = {
      ...swiperEl.params,
      navigation: {
        nextEl: '#custom-next',
        prevEl: '#custom-prev',
      },
    };

    swiperEl.initialize();
  }
}


}
