import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent {

}
