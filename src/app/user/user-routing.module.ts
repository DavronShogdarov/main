import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './component/instructions/instructions.component';
import { StartComponent } from './component/start/start.component';
import { TestComponent } from './component/test/test.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'test',
      },
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: 'instructions',
        component: InstructionsComponent,
      },
      {
        path: 'start',
        component: StartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
