import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CurriculumComponent } from './curriculum.component';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('CurriculumComponent', () => {

  let component: CurriculumComponent;
  let fixture: ComponentFixture<CurriculumComponent>;
  let harness: RouterTestingHarness;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumComponent],
      providers: [
        provideRouter([
          {
            path: ':lang',
            component: CurriculumComponent,
          },
        ]),
        provideLocationMocks(),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      declarations: []
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculumComponent);
    component = fixture.componentInstance;

    harness = await RouterTestingHarness.create();
    httpTesting = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load the curriculum for the selected language',  waitForAsync(() => {
    harness.navigateByUrl('/en').then(
      curriculumComponent => {
        expect(curriculumComponent).toBeDefined();
        httpTesting.expectOne('cv/cv-alessandro-umek-english.md').flush('# Test');
        httpTesting.verify();
      }
    );
  }));

  it('should not load the curriculum for not present language',  waitForAsync(() => {
    harness.navigateByUrl('/not-present').then(
      curriculumComponent => {
        expect(curriculumComponent).toBeDefined();
        httpTesting.verify();
      }
    );
  }));

});


