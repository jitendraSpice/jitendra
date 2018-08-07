import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GOTCharacterComponent implements OnInit {
  
     GOTCharcter:string[];
     GOTCharcterfirstName:string[]=["jitu","jitendra","vikash","rausan"];
     GOTCharcterlastName:string[]=["singh","kamboj","Yadav","nanali"];
     twowayData1='jitu'
     i=0;
     stopswitch:any;
     propflag=true;
     @Input () imageUrlchild:string;
     stopprog(){
    clearInterval(this.stopswitch);
    this.propflag=false;
     }
     chanelistcontent(){
     this.stopswitch=setInterval(()=>{
        if(this.i%2==0){
          this.GOTCharcter=this.GOTCharcterfirstName;
          console.log("if block");
        }else{
          this.GOTCharcter=this.GOTCharcterlastName;
          console.log("else block");
        }
        this.i++;
      },3000);
      this.propflag=false;
     }
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.imageUrlchild);
  }

}
