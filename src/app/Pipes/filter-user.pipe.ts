import { Pipe, PipeTransform } from '@angular/core';

// interface user {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   gender: string;
//   ipAddress: string;
// }
@Pipe({
  name: 'filterUser',
})
export class FilterUserPipe implements PipeTransform {
  // transform(value, condition?: string): any {
  //   console.log('filterUser :', condition);
  //   if (condition.length > 0) {
  //     return user.filter((v) => v.firstName == condition);
  //   } else {
  //     return user.filter((c) => c.gender == 'Female');
  //   }
  // }
  transform(value, condition?: string): any {
    if (condition.length > 0) {
      return value.filter((c) => c.gender == condition);
    } else {
      return value.filter((c) => c.gender == 'Female');
    }
  }
}
