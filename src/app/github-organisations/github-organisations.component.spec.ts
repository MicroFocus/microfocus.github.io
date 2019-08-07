import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubOrganisationsComponent } from './github-organisations.component';

describe('GithubOrganisationsComponent', () => {
  let component: GithubOrganisationsComponent;
  let fixture: ComponentFixture<GithubOrganisationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubOrganisationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubOrganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
