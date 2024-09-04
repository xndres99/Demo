import { Component } from '@angular/core';

@Component({
  selector: 'app-pro4',
  templateUrl: './pro4.component.html',
  styleUrls: ['./pro4.component.css']
})
export class Pro4Component {
  platos = [
    {
      titulo: 'Pollo al Curry',
      descripcion: 'Deléitate con nuestro exquisito Pollo al Curry, una combinación perfecta de trozos tiernos de pechuga de pollo marinados en una mezcla de especias aromáticas, cocidos a fuego lento en una cremosa salsa de curry.',
      precio: 50
    },
    {
      titulo: 'Bistec a la Parrilla',
      descripcion: 'Deléitate con nuestro exquisito Pollo al Curry, una combinación perfecta de trozos tiernos de pechuga de pollo marinados en una mezcla de especias aromáticas, cocidos a fuego lento en una cremosa salsa de curry.',
      precio: 60
    },
    {
      titulo: 'Ensalada César',
      descripcion: 'Deléitate con nuestro exquisito Pollo al Curry, una combinación perfecta de trozos tiernos de pechuga de pollo marinados en una mezcla de especias aromáticas, cocidos a fuego lento en una cremosa salsa de curry.',
      precio: 40
    }
    // Agrega más platos si es necesario
  ];
}
