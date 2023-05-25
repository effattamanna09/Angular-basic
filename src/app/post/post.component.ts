import {
  Component, Input, EventEmitter, Output, OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewChecked, AfterViewInit, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('image') postImg = ''
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log('constractor() is called');
  }
  ngOnInit() {
    console.log('ngOnInit() is called', this.postImg);
  }
  ngOnChanges() {
    console.log('ngOnChanges() is called');
  }
  ngDoCheck() {
    console.log('ngDoCheck() is called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit() is called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() is called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() is called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit() is called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy() is called');
  }
}
