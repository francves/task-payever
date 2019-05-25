import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  user: any;

  ngOnInit() {
    this.routeActive.params.subscribe((value) => {
      this.getUser(value.userId);
    });
  }

  getUser(id: number){
    this.apiUsuarios.getUserById(id)
      .subscribe(user => {
        this.user = user;
        console.log("El user: ", this.user);
      })
  }

  goBack(){
    this.router.navigate(['']);
  }

}
