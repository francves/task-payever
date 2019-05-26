import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../../models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private apiUsuarios: UserService,
    private routeActive: ActivatedRoute,
    private router: Router
  ) { }

  user: User;

  ngOnInit() {
    this.routeActive.params.subscribe((value) => {
      this.getUser(parseInt(value.pageId), parseInt(value.userId));
    });
  }

  getUser(pageId: number, userId: number){
    let userList;
    this.apiUsuarios.getUserList(pageId)
      .subscribe(users => {
        userList = users.data.filter(user => user.id === userId);
        this.user = userList[0];
        console.log("The user: ", this.user);
      })
  }

  goBack(){
    this.router.navigate(['']);
  }

}
