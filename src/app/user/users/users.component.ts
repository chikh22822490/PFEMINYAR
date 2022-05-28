import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/primeng';
import { CrudGlobalService } from '../../crud-global.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  msgs: Message[] = [];

  entities: User[];
  ojetUrl: string = "users";
  bodyTableExport: any;

  constructor(
    private router: Router,
    private crudservice: CrudGlobalService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.crudservice.getlistEntity(this.ojetUrl).subscribe((data) => {
      this.entities = data.result;
      console.log("this.entities");
      console.log(this.entities);
    });
  }

  delete(entity: User): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id).subscribe((data) => {
      this.entities = this.entities.filter((u) => u !== entity);
      this.messageService.add({
        severity: "success",
        summary: "Service Message",
        detail: "Row Deleted Success.",
      });
    });
  }

  edit(entity: User): void {
    window.localStorage.removeItem("editUserId");

    window.localStorage.setItem("editUserId", entity.id.toString());
    this.router.navigate(["enpr/edit-User"]);
  }

  addUser(): void {
    this.router.navigate(["enpr/add-User"]);
  }

  detailsUser(entity: User) {
    window.localStorage.removeItem("detalUserId");
    window.localStorage.setItem("detalUserId", entity.id.toString());
    this.router.navigate(["enpr/details-User"]);
  }
}
