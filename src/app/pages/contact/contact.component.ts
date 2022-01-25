import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactFrom: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  get name() { return this.contactFrom.get('name'); }

  get email() { return this.contactFrom.get('email'); }

  get phone() { return this.contactFrom.get('phone'); }

  get message() { return this.contactFrom.get('message'); }

  constructor(private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  async submitContactForm() {

    await this.router.navigate(['home']);
  }
}
