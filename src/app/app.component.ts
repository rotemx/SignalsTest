import {Component, computed, Signal, signal, WritableSignal} from "@angular/core";
import { RouterOutlet }                                      from '@angular/router';
import {JsonPipe}            from "@angular/common";
import {FormsModule}         from "@angular/forms";
import {ChildComponent}                                      from "./child/child.component";
declare let window:any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    window['comp'] = this;
  }
  title = 'SignalsTest';
  person:WritableSignal<{ name:string }> = signal({name : "Inon is Not Right"})
  
  computedPerson = computed(()=>({
    val:this.person
  }))
  
  onNameChange(name: string) {
    this.computedPerson().val.update(p => {
      p.name = name;
      return p
    })
  }
  
  onRotemIsWring() {
    console.log('this.person',this.person());
  }
}
