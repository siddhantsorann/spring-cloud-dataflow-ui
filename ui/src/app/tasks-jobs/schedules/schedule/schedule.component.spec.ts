import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DestroyComponent } from '../destroy/destroy.component';
import { RoleDirective } from '../../../security/directive/role.directive';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityServiceMock } from '../../../tests/api/security.service.mock';
import { AboutServiceMock } from '../../../tests/api/about.service.mock';
import { NotificationServiceMock } from '../../../tests/service/notification.service.mock';
import { ScheduleServiceMock } from '../../../tests/api/schedule.service.mock';
import { ContextService } from '../../../shared/service/context.service';
import { ScheduleComponent } from './schedule.component';
import { TaskServiceMock } from '../../../tests/api/task.service.mock';

describe('tasks-jobs/schedules/schedule/schedule.component.ts', () => {

  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScheduleComponent,
        DestroyComponent,
        RoleDirective
      ],
      imports: [
        FormsModule,
        ClarityModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
      ],
      providers: [
        SecurityServiceMock.provider,
        AboutServiceMock.provider,
        NotificationServiceMock.provider,
        ScheduleServiceMock.provider,
        TaskServiceMock.provider,
        ContextService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    NotificationServiceMock.mock.clearAll();
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
