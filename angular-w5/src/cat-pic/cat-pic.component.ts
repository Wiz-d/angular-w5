import { Component, inject } from "@angular/core";
import { PicApiService } from "../services/pic.api";

@Component({
    selector    : 'cat-pic-app',
    templateUrl : './cat-pic.component.html',
    styleUrl    : './cat-pic.component.css',
    standalone  : true,

})

export class CatPicComponent{

    public catPicUrl;
    private picApiService = inject(PicApiService)

    public ngOnInit(){
        this.picApiService.getCatPic().subscribe((data: any) => {
            this.catPicUrl = data[0].url;
            console.log(this.catPicUrl);        
        })

    }

}