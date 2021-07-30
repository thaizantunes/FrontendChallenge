import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  @Input() tipoLayout = 'full';
  @Input() isLoading = false;
  @Input() redirect = '/home';
  @Input() textoBreadcrumb!: any[];
  @Output() clickLink? = new EventEmitter();
  @Input() menuCollapsed = false;
  nomeUsuario = '';
  isMobile = false;

  constructor() {}

  ngOnInit() {}
}
