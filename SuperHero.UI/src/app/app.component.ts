import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];

  /**
   * constructor : Dependency Injection (DI) -
   * Angular will create an instance of SuperHeroService and pass it to the constructor
   * @param superHeroService : SuperHeroService
   * @returns void
   */

  constructor(private superHeroService: SuperHeroService) {}
  /**
   * ngOnInit : Lifecycle Hook
   * Angular calls ngOnInit shortly after creating a component.
   * It's a good place to put initialization logic.
   * @returns void
   */
  ngOnInit(): void {
    this.heroes = this.superHeroService.getSuperHeroes();
    console.log('heroes', this.heroes);
  }
}
