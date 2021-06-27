import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Image } from 'src/models/image';
import { Video } from 'src/models/video';
import { Advice } from 'src/models/advice';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  imagesCollection: AngularFirestoreCollection<Image>;
  videosCollection: AngularFirestoreCollection<Video>;
  adviceCollection: AngularFirestoreCollection<Advice>;

  constructor(public firestoreServices: AngularFirestore) { 
    this.imagesCollection = this.firestoreServices.collection<Image>('Images');
    this.videosCollection = this.firestoreServices.collection<Video>('Videos');
    this.adviceCollection = this.firestoreServices.collection<Advice>('Advice');
  }

  // Images start

  getImages(): Observable<Image[]> {
    return this.imagesCollection.valueChanges();
  }

  getImageById( id: string): Observable<Image | undefined> {
    return this.imagesCollection.doc(id).valueChanges();
  }

  createImage( image: Image): Promise<void> {
    image.id = this.firestoreServices.createId();
    return this.imagesCollection.doc(image.id).set(image);
  }

  updateImage( id: string, image: Partial<Image>): Promise<void> {
    return this.imagesCollection.doc(id).update(image);
  }

  deleteImage( id: string ): Promise<void> {
    return this.imagesCollection.doc(id).delete();
  }

  // end

  // videos start

  getVideos(): Observable<Video[]> {
    return this.videosCollection.valueChanges();
  }

  getVideoById( id: string): Observable<Video | undefined> {
    return this.videosCollection.doc(id).valueChanges();
  }

  createVideo( video: Video): Promise<void> {
    video.id = this.firestoreServices.createId();
    return this.videosCollection.doc(video.id).set(video);
  }

  updateVideo( id: string, image: Partial<Video>): Promise<void> {
    return this.videosCollection.doc(id).update(image);
  }

  deleteVideo( id: string ): Promise<void> {
    return this.videosCollection.doc(id).delete();
  }

  // end

  // Advice start

  getAdvice(): Observable<Advice[]> {
    return this.adviceCollection.valueChanges();
  }

  getAdviceById( id: string): Observable<Advice | undefined> {
    return this.adviceCollection.doc(id).valueChanges();
  }

  createAdvice( advice: Advice): Promise<void> {
    advice.id = this.firestoreServices.createId();
    return this.adviceCollection.doc(advice.id).set(advice);
  }

  updateAdvice( id: string, image: Partial<Advice>): Promise<void> {
    return this.adviceCollection.doc(id).update(image);
  }

  deleteAdvice( id: string ): Promise<void> {
    return this.adviceCollection.doc(id).delete();
  }

  // end


}
