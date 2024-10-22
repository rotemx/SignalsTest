import {Component, computed, Signal, signal, WritableSignal} from "@angular/core";
import { RouterOutlet }                                      from '@angular/router';
import {JsonPipe}            from "@angular/common";
import {FormsModule}         from "@angular/forms";
declare let window:any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    window['comp'] = this;
  }
  title = 'SignalsTest';
  person:WritableSignal<{ name:string }> = signal({name : "Inon is Wrong"})
  
  computedPerson = computed(()=>({
    val:this.person
  }))
  
  onNameChange(name: string) {
    console.log('name', name);
    this.person.update(p => {
      p.name = name;
      return p
    })
  }
}
