import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Observable, from, map, pluck } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div>
      <h1>Sweet Alert 2</h1> 
      <button (click)="onOpenSweetAlert()">
        Abrir Modal
      </button>
   </div>
  `,
  styles: [
    'div { display: flex; align-items: center; flex-direction: column; gap: 1rem }',
    'button { width: 250px; padding: 1rem; background: indigo; color: #fff; font-weight: 600; border-radius: 10px; cursor: pointer; font-size: 1rem }',
    'button:hover { background: purple }',
    'h1 { font-size: 3rem; font-weight: 700; color: indigo }'
  ],
})

export class AppComponent {

  onOpenSweetAlert(): void {
    this.notificationConfirm({
      icon: 'error',
          title: 'Você tem certeza disso?',
          text: 'Essa ação não poderá ser cancelada',
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonColor: 'green',
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar'
    }).subscribe(console.log)
  }

  private notificationConfirm(options: SweetAlertOptions): Observable<boolean> {
    return from(
      Swal.fire({
        icon: 'question',
        ...options,
      })
    ).pipe(map(({ isConfirmed }) => isConfirmed));
  }
}
