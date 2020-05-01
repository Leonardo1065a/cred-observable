import { Post } from './../resource/post.resource';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  lista: Post[];

  form: Post = {userId: 1, title: 'Observable', body: 'Angular e RxJs'};

  formUpdate: Post = {id: 1, userId: 1, title: 'Observable update', body: 'Angular e RxJs update'};

  formId: number = 10;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.get();
    this.post();
    this.put();
    this.delete();
  }

  get(){
    this.postService.get().subscribe((res) => {
      this.lista = res
      console.log(this.lista);
    });
  }

  post(){
    this.postService.post(this.form).subscribe((res) => console.log(res));
  }

  put(){
    this.postService.put(this.formUpdate).subscribe((res) => console.log(res));
  }

  delete(){
    this.postService.delete(this.formId).subscribe();
  }


}
