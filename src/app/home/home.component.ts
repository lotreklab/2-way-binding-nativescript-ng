import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    //model: LoginViewModel = new LoginViewModel();
    email: string = ''

    ngOnInit(): void {
        // Init your component properties here.
    }
}
