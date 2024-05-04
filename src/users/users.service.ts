import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 'Dune',
      name: 'Frank Herbert',
      year: 1965,
    },
    {
      id: "Ender's Game",
      name: 'Orson Scott Card',
      year: 1985,
    },
    {
      id: 'Foundation',
      name: 'Isaac Asimov',
      year: 1951,
    },
    {
      id: '1984',
      name: 'George Orwell',
      year: 1949,
    },
    {
      id: 'Brave New World',
      name: 'Aldous Huxley',
      year: 1932,
    },
    {
      id: "The Hitchhiker's Guide to the Galaxy",
      name: 'Douglas Adams',
      year: 1979,
    },
    {
      id: 'Neuromancer',
      name: 'William Gibson',
      year: 1984,
    },
    {
      id: 'Snow Crash',
      name: 'Neal Stephenson',
      year: 1992,
    },
    {
      id: 'The Martian',
      name: 'Andy Weir',
      year: 2011,
    },
    {
      id: 'Ready Player One',
      name: 'Ernest Cline',
      year: 2011,
    },
  ];
  getUsers() {
    return this.users
  }
}