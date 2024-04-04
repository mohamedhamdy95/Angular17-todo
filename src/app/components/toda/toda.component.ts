import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toda',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './toda.component.html',
  styleUrl: './toda.component.scss',
})
export class TodaComponent {
  title: string = 'To Do List App';
  imageLink: string = 'https://cdn-icons-png.flaticon.com/512/4697/4697260.png';
  tasksList: any[] = [];
  nawTaskItem:string='';
  addTask(){
    if(this.nawTaskItem !== null){
      this.tasksList.push(this.nawTaskItem)
    }
    console.log(this.nawTaskItem)
    console.log(this.tasksList)
    };
}



