import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-id',
  templateUrl: './users-id.component.html',
  styleUrls: ['./users-id.component.scss'],
})
export class UsersIdComponent implements OnInit {
  private sub: any;
  users: User[] = [];
  _id: any;

  columns = [
    'Balance',
    'Picture',
    'Age',
    'Name',
    'Email',
    'Phone',
    'Address',
    'About',
    'Tags',
    'Registered',
  ];

  constructor(private route: ActivatedRoute, private us: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.us.getUsers().subscribe((users) => (this.users = users));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

//  parseInt(this.route.snapshot.paramMap.get('_id'));
//  this.us.getUser(+'_id').subscribe((user) => (this.users = user));
//  console.log(parseInt(this.route.snapshot.paramMap.get(this._id)));

//  const _id = this.route.params.subscribe((params: Params) => {
//  this.us.getUser(params['_id']);
//  console.log(params['_id']);
//  });
