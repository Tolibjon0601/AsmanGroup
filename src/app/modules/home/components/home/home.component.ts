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


  slidessecond = [
    {
      stats: "20+",
      statsDescription:
        "Biznes, komfort va ekonom darajadagi eng qulay joylashuvga ega bo‘lgan turar-joy majmualari allaqachon foydalanishga topshirilgan.",

      button: "Batafsil",
      image: "assets/image/slider_4.jpg"
    },
    {
      stats: "25+",
      statsDescription:
        "Yangi loyihalarimizda yashash uchun barcha qulayliklar mavjud — maktablar, bog‘chalar, savdo nuqtalari va yashil hududlar.",

      button: "Bogʻlanish",
      image: "assets/image/slider_5.jpg"
    },
    {
      stats: "30+",
      statsDescription:
        "Ko‘p yillik tajribamiz asosida har bir mijoz uchun eng qulay va ishonchli yechimlarni taqdim etamiz.",

      button: "Bogʻlanish",
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
