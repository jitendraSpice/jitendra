import { Injectable ,Component} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert.component',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class GenericAlertComponent  {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    console.log(content)
    this.modalService.open(content);
  }
}