import {Pipe, PipeTransform} from 'angular2/core';
import {Team} from './teams.service'

@Pipe({name: 'firstfour', pure: false})
export class FirstFour implements PipeTransform {

    transform(a:Team[]): any{
      var devolver:Team[] = [];
      for (let i=0; i < 4; i++) {
        devolver.push(a[i]);
      }
      return devolver;
    }
