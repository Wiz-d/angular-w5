import { Component, inject } from "@angular/core";
import { PicApiService } from "../services/pic.api";

@Component({
    selector    : 'fox-pic-app',
    templateUrl : './fox-pic.component.html',
    styleUrl    : './fox-pic.component.css',
    standalone  : true
})

export class FoxPicComponent {

    public foxPicUrl;
    private picApiService = inject(PicApiService)

    public ngOnInit(){
        this.picApiService.getFoxPic().subscribe((data: any) => {
            this.foxPicUrl = data.image;
            console.log(this.foxPicUrl);        
        })

    }

}