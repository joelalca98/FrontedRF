import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Photo} from '../interfaces/Photo'
import { Fotografo } from '../interfaces/Fotografo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'http://localhost:4000/api/photos'

  URIF = 'http://localhost:4000/api/fotografo'

  constructor(private http: HttpClient) { }

  createPhoto (title: string, description: string, photo: File, fotografo:string) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    fd.append('fotografo', fotografo)
    return this.http.post(this.URI, fd);
  }

  getPhotos () {
    return this.http.get<Photo[]>(this.URI);
  }

  getPhoto (id: string) {
    return this.http.get<Photo>(this.URI + '/' + id); //Concatenamos para pasarle al backend esa id con /photos/id
  }

  deletePhoto (id: string){
    return this.http.delete(this.URI + '/' + id)
  }

  updatePhoto(id:string, title:string, description:string, fotografo:string){
    return this.http.put(`${this.URI}/${id}`, {title, description, fotografo})
  }

  getFotografo(id: string){
    return this.http.get<Fotografo>(this.URIF + '/' + id)
  }

  // createFotografo (name: string, description: string) {
  //   const fd = new FormData();
  //   fd.append('name', name);
  //   fd.append('description', description);
  //   return this.http.post(this.URIF, fd);
  // }
}
