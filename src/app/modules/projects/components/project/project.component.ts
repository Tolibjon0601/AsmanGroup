import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [CommonModule,RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ProjectComponent implements AfterViewInit {
  slides = [
    {
      title: '100% to\'lov bilan xonadonlarning 1kv.m. narxi 7 990 000 mln so\'mdan boshlanadi',
      button: 'Batafsil',
      image: 'assets/image/slider_1.jpg'
    },

  ];
  slidessecond = [
    {
      stats: "WORKOUT ZONASI VA YUGIRISH UCHUN YO'LAKLAR",
      statsDescription:
      "Sog'lom turmush tarzini qadrlovchilar uchun turar-joy majmuasi hududida katta workout zona, ko'p funksiyali sport maydonchasi va hovli perimetri bo'ylab yugurish yo'lagi mavjud.",

      button: "Batafsil",
      image: "assets/image/workaout.jpg"
    },
    {
      stats: "LAUNJ ZONALAR",
      statsDescription:
        "Bu yerda go'zal hovli muhitidan zavq olib, yolg'izlikda hordiq chiqarish va yoqimli suhbatlar uchun zamonaviy launj zonalar joriy etilgan.",

      button: "Bogʻlanish",
      image: "assets/image/slider_3.jpg"
    },
    {
      stats: "AVTOTURARGOH",
      statsDescription:
        "Orzular Maskani nafaqat siz, balki avtomobilingiz uchun ham qulay joy bo'ladi. Videokuzatuv tizimiga ega qo‘riqlanadigan avtoturargoh avtomobilingiz xavfsizligini kafolatlaydi. Avtoturargohda elektromobil egalari uchun zaryadlash stansiyalari uchun maxsus joylar mavjud.",

      button: "Bogʻlanish",
      image: "assets/image/aftoturargoh.jpg"
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



  apartments = [
    {
      image: '../../../../../assets/image/apartment_img_1.jpg',
      number: '11',
      area: '52.6 м²',
      rooms: 1,
      floor: 4,
      year: 2026,
      project: {
        name: 'Orzular Maskani',
        url: 'https://mbc.uz/uz/project/regnum-plaza'
      }
    },
    {
      image: '../../../../../assets/image/apartment_img_2.jpg',
      number: '12',
      area: '70.5 м²',
      rooms: 2,
      floor: 5,
      year: 2026,
      project: {
        name: 'Orzular Maskani',
        url: 'https://mbc.uz/uz/project/orzu-city'
      }
    },
    {
      image: '../../../../../assets/image/apartment_img_3.jpg',
      number: '13',
      area: '76.00 м²',
      rooms: 2,
      floor: 3,
      year: 2025,
      project: {
        name: 'Orzular Maskani',
        url: 'https://mbc.uz/uz/project/zamin-residence'
      }
    },
    {
      image: '../../../../../assets/image/apartment_img_4.jpg',
      number: '13',
      area: '89.2 м²',
      rooms: 2,
      floor: 3,
      year: 2025,
      project: {
        name: 'Orzular Maskani',
        url: 'https://mbc.uz/uz/project/zamin-residence'
      }
    }
  ];

}
