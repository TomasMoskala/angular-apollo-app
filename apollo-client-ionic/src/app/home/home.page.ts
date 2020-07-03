import {Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { ApolloQueryResult } from 'apollo-client';
import { Platform } from '@ionic/angular';
import { Apollo } from 'apollo-angular';
import { Observable } from 'apollo-link';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  rows: any[];
  loading = true;
  error: any;

  constructor(private platform: Platform, private ds: DataService) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.getSomeData();
    });
  }

  getSomeData(){
    this.ds.watchQry(gql`
      query{
        users{
          user_id
          user_name
        }
      }
    `)
    .subscribe((result: ApolloQueryResult<any>) => {

    this.rows = result.data && result.data.users;
    this.loading = result.loading;
    this.error = result.errors;
    console.log('initRowsdata', result.data);
});

  }

}
