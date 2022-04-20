import { Component, OnInit } from '@angular/core';
import { onSolve } from '../../problem.service';
import { ProfileService } from '../../profile.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-route',
  templateUrl: './sign-route.component.html',
  styleUrls: ['./sign-route.component.sass'],
  providers: [ProfileService]
})
export class SignRouteComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    let addProfile = this.route.snapshot.paramMap.get('addProfile');

    if (addProfile) {
      this.profileService.addProfile(addProfile);

      this.router.navigate(['/']);
      // perfil añadido a la base de datos local, cerrar sesión para entrar con el nuevo perfil (mostrar swal en la esquina)
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      }).fire({
        icon: 'success',
        title: 'Perfil añadido',
        text: 'Se ha añadido el perfil a la base de datos local, por favor, cierre sesión para entrar con el nuevo perfil.'
      });
    }
    
  }

  public correct(evt: onSolve) {
    this.profileService.login(evt.responses[0], evt.responses[1]);
    this.router.navigate(['/']);
  }

}
