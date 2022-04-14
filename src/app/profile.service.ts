import { Injectable, Output } from '@angular/core';
import { AES, enc } from 'crypto-js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  static xpListener$ = new BehaviorSubject<number>(0);
  static xpObservable$ = ProfileService.xpListener$.asObservable();
  
  addXP(xp: number): void {
    this.getProfile().addXP(xp);
    ProfileService.xpListener$.next(this.getProfile().getXP());
  }
  
  constructor() {
    ProfileService.profile = ProfileService.profile || new this.Profile("invitado");

    let { name, password } = JSON.parse(sessionStorage.getItem('profile') || 'false');
    if (name && password)
      this.login(name, password);
  }
  
  Profile = Profile;
  static profile: Profile;
  
  getProfile(): Profile {
    return ProfileService.profile;
  }

  login(username: string, password: string) {
    ProfileService.profile = new this.Profile(username, password);
    ProfileService.xpListener$.next(this.getProfile().getXP());
    sessionStorage.setItem('profile', JSON.stringify(ProfileService.profile));
  }

  logout() {
    ProfileService.profile = new this.Profile("invitado");
    ProfileService.xpListener$.next(this.getProfile().getXP());
    sessionStorage.removeItem('profile');
  }

}

export class Profile {
  id: number;
  name: string;
  xp: number;
  password: string;

  /**
   * Crea o busca un nuevo perfil que esté de acorde a las contraseñas y nombres dados.
   * @param name Nombre del perfil a buscar o crear.
   * @param password Contraseña del perfil para la busqueda.
   */
  constructor(name: string, password = "") {

    this.name = name;
    this.password = password;
    this.xp = 0;
    this.id = Math.floor(Math.random() * 100000);
    
    this.load();
    this.save();
    
  }

  public addXP(xp: number): void {
    this.xp += xp;
    this.save();
  }
  public setPassword(password: string): void { this.password = password; }
  public getPassword(): string { return this.password; }
  public getXP(): number { return this.xp; }
  public getName(): string { return this.name; }
  public getId(): number { return this.id; }

  public save(): void {
    localStorage.setItem("profile: " + this.id, AES.encrypt(JSON.stringify(this), this.password).toString());
  }

  public load(): void {

    for (let i = 0; i < localStorage.length; i++) {
      let bytes = AES.decrypt(localStorage.getItem(localStorage.key(i) || '') || '', this.password);
      // check if the decrypted text has content
      if (bytes.toString(enc.Utf8).length > 0) {

        let decryptedData = JSON.parse(bytes.toString(enc.Utf8));
  
        if (decryptedData.name === this.name) {
          this.id = decryptedData.id;
          this.xp = decryptedData.xp;
          this.password = decryptedData.password;
          break;
        }
        
        console.log(decryptedData);
      }
    }

    if (this.id === undefined) {
      throw new Error("No se encontró el perfil");
    }
    
  }

  public decryptProfile(password = this.password || "", encryptedProfile = localStorage.getItem("profile: " + this.id)): Profile | null {
    if (encryptedProfile) {
      try {
        let profile = AES.decrypt(encryptedProfile, password).toString();
        console.log(profile);
        return JSON.parse(profile);
      } catch (error) {
        // console.log(error);
        return null;
      }
    } else
      return null;
  }
}

interface profile {
  id: number;
  name: string;
  xp: number;
  password?: string;
}