import {Component, input, InputSignal, output, signal, WritableSignal} from "@angular/core";
import {FormsModule, ReactiveFormsModule}                              from "@angular/forms";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  data  = input<{val:WritableSignal<{name:string}>}>({val:signal({name:"Initial"})})
  
  RotemIsWring = output()
  
  onNameChange(name: string) {
    this.data()?.val.update(p => {
      p.name = name;
      return p
    })
    this.RotemIsWring.emit()
  }
  
  onButtonClick() {
    this.data()?.val.update((p)=>{
      p.name = 'HELLOOOOOOWDwansdjnwajbdjsbadibashjdbsajhbdjwhbbhjsabhabsa'
      return p
    })
    this.RotemIsWring.emit()
    
  }
}
