import {Pipe, PipeTransform} from 'angular2/core';
import {Player} from './teams.service'

@Pipe({name: 'firstfour', pure: false})
export class FirstFour implements PipeTransform {

    transform(a:Player[]): any{
      var devolver:Player[] = [];
      for (let i=0; i < 4; i++) {
        devolver.push(a[i]);
      }
      return devolver;
    }
