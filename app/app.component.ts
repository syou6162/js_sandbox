import { Component } from "@angular/core";
import { Github } from "./github";
@Component({
    selector: "my-app",
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    age = 10;
    repositoryNames = Github.getRepositories();
}
