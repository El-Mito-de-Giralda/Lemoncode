import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup,UntypedFormControl, Validators} from "@angular/forms";
import { MemberEntity } from '../../model/MemberEntity';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { SearchByLoginPipe } from '../../pipes/search-by-login.pipe';
import { MembersService } from '../../services/members.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, HighlightDirective, SearchByLoginPipe,FormsModule, ReactiveFormsModule, ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnChanges{
  @Input()
member: MemberEntity;

@Output()
saveEvent: EventEmitter<MemberEntity>= new EventEmitter();

  editForm: UntypedFormGroup;
  idControl: UntypedFormControl;
  loginControl: UntypedFormControl;
  avatarControl: UntypedFormControl;

  constructor(private fb: UntypedFormBuilder) {
    this.createEditform();
  }

ngOnChanges(): void {
  this.editForm.patchValue(this.member);
}



  createEditform() {
      this.editForm = this.fb.group({
        id: ['', Validators.required],
        login: ['', [Validators.required, Validators.minLength(6)]],
        avatar_url: ''
      });
  
      this.idControl = this.editForm.get('id') as UntypedFormControl;
      this.loginControl = this.editForm.get('login') as UntypedFormControl;
      this.avatarControl = this.editForm.get('avatar_url') as UntypedFormControl;
    }

handleEditFileInput(event: Event) {
  let target=event.target as HTMLInputElement;
  let files: FileList | null= target.files;
  const reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = (event) => {
    this.avatarControl.setValue(reader.result);
  };


}
save() {
  const member = this.editForm.value;
  this.saveEvent.emit(member)
  
}
}