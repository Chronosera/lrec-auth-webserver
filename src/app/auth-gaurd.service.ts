import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class AuthGaurd implements CanActivate {
  //Is the function to determine wether or not a route is authenticated. For now I have it as just either true or false with either option commented out
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //return false;
    return true;
  }
}
