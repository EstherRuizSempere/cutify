import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItemInterface } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  mainMenu = {
    defaultOptions: [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/'],
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
      },
    ] as MenuItemInterface[],
    accessLink: [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      },
    ] as MenuItemInterface[], //Uso el as porque es mas complejo y por tanto
    //este enfoque es más visual es como un objeto literal
  };

  constructor(private router: Router) {}
  customOptions: MenuItemInterface[] = [
    {
      name: 'Mi lista nº1',
      router: ['/'],
    },
    {
      name: 'Mi lista nº2',
      router: ['/'],
    },
    {
      name: 'Mi lista nº3',
      router: ['/'],
    },
  ]; //declaro el tipo explicitamente pero no lo asigno, no es un objeto literal

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
      },
    });
  }
}
