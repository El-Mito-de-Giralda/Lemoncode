import { Component } from '@angular/core';
import { MemberEntity } from '../../model/MemberEntity';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { SearchByLoginPipe } from '../../pipes/search-by-login.pipe';
import { MembersService } from '../../services/members.service';
import { HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HighlightDirective, SearchByLoginPipe, UserEditComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  members: MemberEntity[]=[];
  newMember: MemberEntity;
  memberSelected: MemberEntity;


  constructor(private membersService: MembersService){
    this.membersService.getAll().subscribe(
      members => this.members= members
    );

         this.newMember= {
          id: "",
          login: "",
          avatar_url: ""
         };
  };


      add() {
        this.members.push(this.newMember);
        this.newMember = {
          id: '',
          login: '',
          avatar_url: ''
        };
      }

  handleFileInput(event: Event) {
    let target=event.target as HTMLInputElement;
    let files: FileList | null= target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.newMember.avatar_url = reader.result as string;
    };

  }

  select(member: MemberEntity) {
    this.memberSelected = {...member};
  }
      
      save(member: MemberEntity) {
          this.members = [...this.members];
          const index = this.members.findIndex(item => item.id === member.id);
          this.members.splice(index, 1, member);
      } }
