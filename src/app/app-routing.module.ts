import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component'
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'test', component: TestComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'result', component: ResultComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
