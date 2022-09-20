import { Pipe, PipeTransform } from '@angular/core';

interface user {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}
@Pipe({
  name: 'formatUser',
})
export class FormatUserPipe implements PipeTransform {
  transform(user: user, star?: boolean): any {
    console.log('pipe run: ', user, star);
    // const formatString =
    //   (star ? '*' : '') +
    //   user.id +
    //   ": My name's  " +
    //   user.firstName +
    //   ' and My e-mail is ' +
    //   user.email +
    //   '.';
    const formatString = (star ? '*' : '') + user.id + ':  ' + user.gender;

    return formatString;
  }
}
