import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-css';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{css: string}>(environment.externalPathToData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .subscribe((data: {css: string}) => {
        this.appendCss(data.css);
      });
    
  }


private appendCss(cssPath: string): void {
  const cssLink: HTMLLinkElement = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.type = 'text/css';
  cssLink.href = cssPath;
  document.querySelector('head').appendChild(cssLink);
}
}
