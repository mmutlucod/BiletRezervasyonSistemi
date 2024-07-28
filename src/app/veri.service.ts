import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from 'src/model/course';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MesajService } from './mesaj.service';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeriService {
  private ticketsUrl = 'http://localhost:4200/api/tickets/';
  private ticketUrl = 'http://localhost:4200/app/api/tickets/:id';
 data:any;
 readonly ROOT_URL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,private messageService: MesajService
   ) {
    
    }
   getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketsUrl)
      .pipe(
        tap(_ => this.log('fetched tickets')),
        catchError(this.handleError<Ticket[]>('getTickets', []))
      );
  }
  getTicket(id: number): Observable<Ticket> {
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.get<Ticket>(url).pipe(
      tap(_ => this.log(`fetched ticket id=${id}`)),
      catchError(this.handleError<Ticket>(`getTicket id=${id}`))
    );
  }
  get(url:string){
    this.http.get(`${this.ROOT_URL}/${url}`);

  }
  getCity(id: number) {
    return this.http.get<Ticket>(this.ticketsUrl + 'ticket/' + id);
  }
  public getBilet(id:number){
    return this.http.get(this.ticketUrl+"/"+id)
  }
  
  public _subject = new Subject<object>();
  public event = this._subject.asObservable();

  public publish(sonuc: any) {
    this._subject.next(sonuc);
  }

  
 private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {

  
     console.error(error); 

     this.log(`${operation} failed: ${error.message}`);

   
     return of(result as T);
   };
 }
 private log(message: string) {
  this.messageService.add(`TicketService: ${message}`);
}

}
