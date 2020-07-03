import { Injectable } from '@angular/core';
import {Apollo, Query} from 'apollo-angular';
import gql from 'graphql-tag';
import { R } from 'apollo-angular/types';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apollo: Apollo) { }

  watchQry(qry: DocumentNode, vars?: R): Observable<ApolloQueryResult<Query>> {
    console.log('qry', qry);
    return this.apollo.watchQuery<Query>({ query: qry, variables: vars}).valueChanges;
  }
  // crud qgl - no condition  (EOL can be passed)
  allRows(qryName: string, flds: string[]) { return (gql`
    query { ${ qryName }  { ${ flds.join(' ') } }}`) as DocumentNode;
  }

  idRow(qryName: string, idFld: string, idVal: number, flds: any, isMut?: boolean) { return (gql`
    ${ isMut ? 'mutation' : 'query'}  { ${ qryName } (where: { ${ idFld }: ${ idVal } })
      { ${ flds.join(' ') }}}`) as DocumentNode;
  }

  muteQry(qry: DocumentNode, vars?: R): Observable<FetchResult<Query>> {
    console.log(qry);
    return this.apollo.mutate({
      mutation: qry,
      variables: vars
    });
  }

}
