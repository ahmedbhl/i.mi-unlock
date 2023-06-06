import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header class="bg-light">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="assets/mi.png" alt="Logo">
      </a>
    </nav>
  </div>
</header>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <form class="row g-3">
        <div class="mb-2">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</div>


  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
