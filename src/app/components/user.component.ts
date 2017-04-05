import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p> Email: {{email}}</p>
    <p> {{email}} {{city}} {{object.var1}} {{object.meth2}}</p>
  `,

})
export class UserComponent  {
    name: string;
    email: string;
    city: string;
    address: address;

    constructor() {
        this.name = 'John Doe';
        this.email = 'dudebro@dude.com';
        this.city = 'san jose';
        this.address = {
            var1: 'hello',
            meth2: 'dude',
        };
    }

}

interface address {
    var1: string;
    meth2: string;
}
