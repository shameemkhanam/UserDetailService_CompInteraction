import { EventEmitter } from '@angular/core';

export class UserService {
  users = [
    {
      name: 'John',
      job: 'Teacher',
      gender: 'Male',
      country: 'US',
      age: 35,
      avatar: 'assets/images/img.jpg',
    },
    {
      name: 'Mark',
      job: 'Designer',
      gender: 'Male',
      country: 'Germany',
      age: 35,
      avatar: 'assets/images/img.jpg',
    },
    {
      name: 'Merry',
      job: 'Lawyer',
      gender: 'Female',
      country: 'Ireland',
      age: 35,
      avatar: 'assets/images/img.jpg',
    },
    {
      name: 'Steve',
      job: 'Doctor',
      gender: 'Male',
      country: 'India',
      age: 35,
      avatar: 'assets/images/img.jpg',
    },
  ];

  onShowDetailsClicked = new EventEmitter<{
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }>();

  showUserDetails(user: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }) {
    this.onShowDetailsClicked.emit(user); //from here v r emitting the data
  }
}
