import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  showFiller = false;
  cheminImage:any="../../../../assets/img/photo1.webp"
  cheminImage1:any="../../../../assets/img/photo2.webp"
  cheminImage2:any="../../../../assets/img/photo3.webp"
  cheminImage3:any="../../../../assets/img/photo4.webp"
  cheminImage4:any="../../../../assets/img/photo5.webp"
  cards=[
    {day : "22",
    month : "October",
      title : "Software Engineer",
      subtitle :"IT",
      description:"Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.",
      

    },
    {day : "28",
    month : "August",
      title : "HelpDesk",
      subtitle :"IT",
      description:"Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur."
     
    },
    {
      day : "12",
      month : "Septemmber",
      title : "Community Manger",
      subtitle :"Community Manager",
      description:"Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur."
     
    },
    {day : "01",
    month : "January",
      title : "IT Manager",
      subtitle :"IT",
      description:"Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur."
     
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
