import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tdash',
  standalone:true,
  imports: [RouterLink,CommonModule,RouterOutlet],
  templateUrl: './tdash.component.html',
  styleUrl: './tdash.component.css'
})
export class TdashComponent {

}
