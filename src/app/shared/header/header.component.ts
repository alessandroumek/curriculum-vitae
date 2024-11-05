import { Component } from '@angular/core';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  print() {
    window.print();
  }
}
