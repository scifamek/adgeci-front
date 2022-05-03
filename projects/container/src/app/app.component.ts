import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IModuleModel } from './features/modules/models/module.model';
import { GetEnterpriseModulesUsecase } from './features/modules/usecases/get-enterprise-modules/get-enterprise-modules.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'container';

  headerIcon = 'assets/images/default-img.jpg';

  allItems: any = {
    Entities: 'entities',
    Pagos: 'payments',
  };
  items: {
    display: string;
    route: string;
  }[];

  $items!: Observable<IModuleModel>;
  $itemsSubscription!: Subscription;
  constructor(
    private getEnterpriseModulesUsecase: GetEnterpriseModulesUsecase
  ) {
    this.items = [];
  }
  ngOnInit(): void {
    this.$items = this.getEnterpriseModulesUsecase.call();
    this.$itemsSubscription = this.$items.subscribe({
      next: (item) => {
        this.items.push({
          display: item.name,
          route: this.allItems[item.name],
        });
      },
    });
  }
}
