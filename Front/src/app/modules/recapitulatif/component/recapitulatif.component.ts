import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../shared/models/client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit{

  constructor() { }

  @Input() public client$: Observable<Client>;

  ngOnInit(): void {
    this.client$.subscribe(res => console.log(res));
  }
  
}
