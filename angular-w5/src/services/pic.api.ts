import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class PicApiService{

    private http = inject(HttpClient)

    public getCatPic() {
        return this.http.get(`https://api.thecatapi.com/v1/images/search`)
    }

    public getFoxPic(){
        return this.http.get(`https://randomfox.ca/floof/`)
    }

}