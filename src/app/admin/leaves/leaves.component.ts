import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/admin/models/leaves';
import { LeavesService } from '../../services/leaves/leaves.service';



@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
   leaves: Leave[] = [];
   pending:string = 'pending'

  constructor(private lService: LeavesService) { }

  ngOnInit(): void {
    this.lService.getLeaves().subscribe((leave: Leave[]) =>{
      this.leaves = leave;
      console.log(this.leaves);
    })

    this.getMileStone();
  }
  
  getMileStone(){
    this.leaves.forEach(e =>{
      if(e.pending === false){
        console.log('The application is still pending')
      }else{
        console.log('the aplication has been acted on')
      }
    })
  }

}
