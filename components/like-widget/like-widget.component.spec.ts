import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe('LikeWidgetComponent', () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //declarations: [LikeWidgetComponent],
      //providers: [UniqueServiceId]
      imports: [LikeWidgetModule], //o mesmo que as duas linhas acima
    }).compileComponents; //ira esperar o LikeWidgetComponent ser compilado
    fixture = TestBed.createComponent(LikeWidgetComponent); //ira criar um component para testes
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input Id) property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when Id input property is present', () => {
    const someId = 'someID';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });
  it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, () => {
    spyOn(component.liked,'emit')
    fixture.detectChanges();
   component.like()
   expect(component.liked.emit).toHaveBeenCalled() //verifica se o metodo foi chamado

  });
});
