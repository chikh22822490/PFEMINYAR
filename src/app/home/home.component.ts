import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText;
  cards=[
    {day : "28",
    month : "August",
      title : "Community Manger",
      subtitle :"Community Manager",
      description:"Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur."
     
    },
    {day : "28",
    month : "August",
      title : "Community Manger",
      subtitle :"Community Manager",
      description:"Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur."
     
    },
    {
      day : "28",
      month : "August",
      title : "Community Manger",
      subtitle :"Community Manager",
      description:"Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur."
     
    },
    {day : "28",
    month : "August",
      title : "Community Manger",
      subtitle :"Community Manager",
      description:"Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur."
     
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
