import { ActivatedRoute, provideRouter } from "@angular/router";
import { HeaderComponent } from "./header.component";

describe('HeaderComponent', () => {
  afterEach(() => {
    cy.screenshot({
      overwrite: true,
    });
  })

  context('large screen', () => {
    it('should show 3 items', () => {
      cy.viewport(1024, 100);
      cy.mount(HeaderComponent, {
        imports: [],
        providers: [provideRouter([]),
        { ActivatedRoute, useValue: fakeActivatedRoute }]
      });
      cy.get('app-menu-item').should('have.length', 3);
    });
  });

  context('medium screen', () => {
    it('should show only icons', () => {
      cy.viewport(600, 100);
      cy.mount(HeaderComponent, {
        imports: [],
        providers: [provideRouter([]),
        { ActivatedRoute, useValue: fakeActivatedRoute }]
      });
      cy.get('app-menu-item').should('have.length', 3);
    });
  });

  context('small screen', () => {
    it('should show only not active links with icons', () => {
      cy.viewport(320, 100);
      cy.mount(HeaderComponent, {
        imports: [],
        providers: [provideRouter([]),
        { ActivatedRoute, useValue: fakeActivatedRoute }]
      });
      cy.get('app-menu-item').should('have.length', 3);
    });
  });

});



const fakeActivatedRoute = {
  url: { path: '/en' },
  snapshot: { data: {} }
} as unknown as ActivatedRoute;
