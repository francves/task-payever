import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router';
import { UserList } from '../../models/user-list'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    private apiUsuarios: UserService,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name'];
  dataSource = new MatTableDataSource<any>();
  userList: UserList; 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getUsers(1);
  }

  getUsers(page: number){
    this.apiUsuarios.getUserList(page)
      .subscribe(users => {
        /* console.log("The list users: ", users); */
        this.userList = users;
        this.updateTable(this.userList.data);
      })
  }

  updateTable(users: any){
    this.dataSource.data = users;
  }

  onPaginateChange(value){
    console.log(value);
    this.getUsers(value.pageIndex + 1);
  }

  openUser(userId: number){
    this.router.navigate([`/user/${this.userList.page}/${userId}`]);
  }

}
