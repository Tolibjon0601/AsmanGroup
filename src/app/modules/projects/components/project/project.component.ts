import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-project',
  imports: [CommonModule,RouterLink,ImageModule,TranslateModule],
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
      stats: "projectPage.slides.0.title",
      statsDescription: "projectPage.slides.0.description",
      button: "projectPage.slides.0.button",
      image: "assets/image/workaout.jpg"
    },
    {
      stats: "projectPage.slides.1.title",
      statsDescription: "projectPage.slides.1.description",
      button: "projectPage.slides.1.button",
      image: "assets/image/slider_3.jpg"
    },
    {
      stats: "projectPage.slides.2.title",
      statsDescription: "projectPage.slides.2.description",
      button: "projectPage.slides.2.button",
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
      image: 'assets/image/apartment_img_1.jpg',
      number: '11',
      area: '52.6 м²',
      rooms: 1,
      floor: 4,
      year: 2026,
      project: {
        name: 'Orzular Maskani',
      }
    },
    {
      image: 'assets/image/apartment_img_2.jpg',
      number: '12',
      area: '70.5 м²',
      rooms: 2,
      floor: 5,
      year: 2026,
      project: {
        name: 'Orzular Maskani',
      }
    },
    {
      image: 'assets/image/apartment_img_3.jpg',
      number: '13',
      area: '76.00 м²',
      rooms: 2,
      floor: 3,
      year: 2025,
      project: {
        name: 'Orzular Maskani',
      }
    },
    {
      image: 'assets/image/apartment_img_4.jpg',
      number: '13',
      area: '89.2 м²',
      rooms: 2,
      floor: 3,
      year: 2025,
      project: {
        name: 'Orzular Maskani',
      }
    }


  ];

}
