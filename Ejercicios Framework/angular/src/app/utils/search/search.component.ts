import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() ph="Search..."
  @Input() label="Search..."
  @Input() name="Carlos"

  @Output() clickEnLupa: EventEmitter<string>=new EventEmitter();

changeName(){
  this.name="Francisco";
  this.clickEnLupa.emit(this.name);
}
}
