import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponentComponent } from './projects-component.component';

describe('ProjectsComponentComponent', () => {
  let component: ProjectsComponentComponent;
  let fixture: ComponentFixture<ProjectsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
