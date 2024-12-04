import { ActivatedRoute, provideRouter } from "@angular/router";
import { MenuItemComponent } from "./menu-item.component";

describe('MenuItemComponent', () => {

  afterEach(() => {
    cy.screenshot({
      overwrite: true,
    });
  })

  it('should mount', () => {
    cy.viewport(1024, 100);
    cy.mount(MenuItemComponent, {
      componentProperties: {
        label: 'Italiano',
        path: 'test-route'
      },
      imports: [],
      providers: [
        provideRouter([]),
        { ActivatedRoute, useValue: fakeActivatedRoute }]
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
        { ActivatedRoute, useValue: fakeActivatedRoute }]
    })
    cy.get('img').should('exist');
  });

  it('hide label if viewport is small', () => {
    cy.viewport(300, 100);
    cy.mount(MenuItemComponent, {
      componentProperties: {
        label: 'Italiano',
        path: 'test-route',
        icon: 'italy'
      },
      imports: [],
      providers: [
        provideRouter([]),
        { ActivatedRoute, useValue: fakeActivatedRoute }]
    })

    cy.get('.action-label').should('be.hidden');
  });

  it('show label if viewport is large', () => {
    cy.viewport(1024, 100);
    cy.mount(MenuItemComponent, {
      componentProperties: {
        label: 'Italiano',
        path: 'test-route',
        icon: 'italy'
      },
      imports: [],
      providers: [
        provideRouter([]),
        { ActivatedRoute, useValue: fakeActivatedRoute }]
    })

    cy.get('.action-label').should('be.visible');
  });

});

const fakeActivatedRoute = {
  url: { path: 'test-route' },
  snapshot: { data: {} }
} as unknown as ActivatedRoute;
