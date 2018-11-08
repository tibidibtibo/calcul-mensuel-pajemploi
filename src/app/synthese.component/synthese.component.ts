import { Component } from "@angular/core";

import { HttpService } from '../services/http.service';
import { AuthService } from "../services/auth.service";

@Component({
  selector: "synthese",
  templateUrl: "./synthese.component.html",
  styleUrls: ["./synthese.component.css"]
})
export class SyntheseComponent {

  constructor() {
  }

  public resultat: Object;
  public error: Object;

  onChangeResultat(newResultat: Object) {
    this.resultat = newResultat;
  }

  onChangeError(newError: Object) {
    this.error = newError;
  }
}
