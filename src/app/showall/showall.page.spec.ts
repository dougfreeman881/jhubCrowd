import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowallPage } from './showall.page';

describe('ShowallPage', () => {
  let component: ShowallPage;
  let fixture: ComponentFixture<ShowallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
