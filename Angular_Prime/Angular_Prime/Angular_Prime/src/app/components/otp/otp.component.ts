import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements AfterViewInit {

  ngAfterViewInit() {
    const inputs = document.querySelectorAll('.otp-letter-input') as NodeListOf<HTMLInputElement>;

    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => this.handleInput(e, inputs, index));
      input.addEventListener('keydown', (e) => this.handleKeyDown(e, inputs, index));
    });
  }

  private handleInput(event: Event, inputs: NodeListOf<HTMLInputElement>, index: number) {
    const target = event.target as HTMLInputElement;

    if (target.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  }

  private handleKeyDown(event: KeyboardEvent, inputs: NodeListOf<HTMLInputElement>, index: number) {
    if (event.key === 'Backspace' && index > 0 && (event.target as HTMLInputElement).value === '') {
      inputs[index - 1].focus();
    }
  }
}
