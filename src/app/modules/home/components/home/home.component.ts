import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent  implements AfterViewInit {
  slides = [
    {
      title: 'Yangi uy – yangi hayot! 100% to‘lovda 1 kv.m narxi atigi 7 990 000 so‘mdan boshlanadi',
      button: 'Batafsil maʼlumot',
      image: 'assets/image/slider_1.jpg'
    },
    {
      title: 'Asman Group – sifatli qurilish va zamonaviy arxitektura timsoli!',
      button: 'Loyihalar bilan tanishing',
      image: 'assets/image/slider_2.jpg'
    },
    {
      title: 'Orzuyingizdagi xonadonni toping! Bo‘lib-bo‘lib to‘lash imkoniyati mavjud',
      button: 'Bogʻlanish',
      image: 'assets/image/slider_3.jpg'
    },
    {
      title: 'Biz bilan barqaror investitsiya va ishonchli uy-joy!',
      button: 'Konsultatsiya olish',
      image: 'assets/image/slider_4.jpg'
    },
    {
      title: 'Yangi turar joy majmualari: qulay joylashuv, xavfsizlik va zamonaviylik',
      button: 'Tafsilotlar',
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

    // DOM yuklangandan keyin to‘g‘ri tugmalarni berish
    swiperEl.navigation = {
      nextEl: document.getElementById('custom-next'),
      prevEl: document.getElementById('custom-prev'),
    };

    swiperEl.initialize(); // bu MUHIM!
  }

}
