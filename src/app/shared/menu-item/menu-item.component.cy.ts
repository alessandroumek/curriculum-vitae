import { ActivatedRoute, provideRouter } from "@angular/router";
import { MenuItemComponent } from "./menu-item.component";

it('mounts', () => {
  cy.viewport(200, 100);

  cy.mount(MenuItemComponent, {
    componentProperties: {
      label: 'Italiano',
      path: 'test-route'
    },
    imports: [],
    providers: [
      provideRouter([]),
      { ActivatedRoute, useValue: fakeActivatedRoute}]
  })
  cy.get('a').should('have.text', 'Italiano');
  cy.get('img').should('not.exist');
})


it('show icon if present', () => {
  cy.viewport(200, 100);
  cy.mount(MenuItemComponent, {
    componentProperties: {
      label: 'Italiano',
      path: 'test-route',
      icon: 'italy'
    },
    imports: [],
    providers: [
      provideRouter([]),
      { ActivatedRoute, useValue: fakeActivatedRoute}]
  })

  cy.get('img').should('exist')
});


const fakeActivatedRoute = {
  url: { path: 'test-route' },
  snapshot: { data: {} }
} as unknown as ActivatedRoute;
