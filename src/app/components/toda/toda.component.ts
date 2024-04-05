import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './toda.component.html',
  styleUrl: './toda.component.scss',
})
export class TodaComponent {
  title: string = 'To Do List App - Angular17';
  imageLink: string = 'https://cdn-icons-png.flaticon.com/512/4697/4697260.png';
  tasksList: any[] = [];
  nawTaskItem: string = '';
  showTable: boolean = false;
  addTask() {
    if (this.nawTaskItem.trim() !== '') {
      this.tasksList.push(this.nawTaskItem);
      this.nawTaskItem = '';
      this.showTable = true;
    } else {
      alert('enter your item');
    }
    console.log(this.nawTaskItem);
    console.log(this.tasksList);
  }
  remove(index: number) {
    this.tasksList.splice(index, 1);
    this.showTable = this.tasksList.length > 0;
  }

  // edit(index: number) {
  //   let updatedTask = prompt("Edit Your Task",this.tasksList[index])
  //   this.tasksList[index] = updatedTask?.trim()
  // }
edit(index:number,updatedTask:string) : string | void{
const trimedTask = updatedTask.trim();
if(trimedTask !== ''){
this.tasksList[index] = trimedTask;
}else{
  updatedTask = this.tasksList[index]
  return this.nawTaskItem = updatedTask;
}
this.nawTaskItem = ""
}
}
