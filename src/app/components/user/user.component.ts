import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../dir/highlight.directive';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule, HighlightDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() name = ''

  @Output() myEvent = new EventEmitter<string>()
  sendData(){
    this.myEvent.emit('learn Angular on youtub')
  }

  Name = 'user';
  isBtndisabled = true;
  inputValue = 'test';

  user = [
    { Name: 'vivek', age: 22, profile: 'student' },
    { Name: 'vikkee', age: 29, profile: 'emplye' },
    { Name: 'vivek', age: 20, profile: 'student' },
    { Name: 'vivek', age: 22, profile: 'student' },
    { Name: 'vivek', age: 22, profile: 'student' },
    { Name: 'vivek', age: 22, profile: 'student' },
    { Name: 'vivek', age: 22, profile: 'student' },
  ];

  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.inputValue = value;
    console.log(value);
  }
color="blue"
}
