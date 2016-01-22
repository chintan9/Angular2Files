import { Component, provide } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";
import {
Router,
RouteConfig,
ROUTER_DIRECTIVES,
ROUTER_PROVIDERS,
LocationStrategy,
HashLocationStrategy
} from "angular2/router";
import { HTTP_PROVIDERS } from "angular2/http";

import { Login } from "../login/login";
import { Files } from "../files/files";

@Component({
    selector: "files-app",
    template: "<router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES]
})

// Configure the routes for the app
@RouteConfig([
    { name: "Login", component: Login, path: "/login" },
    { name: "File", component: Files, path: "/files" }
])

export class App {
    constructor(router: Router) {

        router.navigate(["/Login"]);

    }
}

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);
