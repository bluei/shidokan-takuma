import { Component } from '@angular/core';
import { Instructor } from '../_models/instructor';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent {

  mayne: Instructor = {
    name: 'Allen Mayne',
    dan: '9',
    dateStarted: new Date('1968-10-26'),
    imageURL: 'https://res.cloudinary.com/blue-i/image/upload/v1670180168/ook/Allen_aspect_240_320.jpg',
    bio: 'a real nice guy'
  };

  instructors: Instructor[] = [
    {
      name: 'Allen Mayne',
      dan: '9',
      dateStarted: new Date('1978-01-01'),
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/v1670180168/ook/Allen_aspect_240_320.jpg',
      bio: 'He is a real nice guy. lskdfj l;skdjf al;sdkfj a;lsdk fjasa sd fasdjkf eruthewruig sdrfkjgs hdkljfa hsdkljfa hsdlk'
    },
    {
      name: 'Michael Dantuma',
      dan: '8',
      dateStarted: new Date('1982-01-01'),
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/ar_240:320,c_crop,g_south,h_980,w_735/v1706841187/ook/mike_760_1018.jpg',
      bio: 'Known as Squatch but also a real nice guy'
    },
    {
      name: 'Scott Morey',
      dan: '7',
      dateStarted: new Date('1988-04-01'),
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/v1670180171/ook/Scott_aspect_240_320.jpg',
      bio: 'Known as Scott but also a real nice guy'
    },
    {
      name: 'Mark Talbot',
      dan: '7',
      dateStarted: new Date('1989-01-01'),
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/v1670180172/ook/Mark_aspect_240_320.jpg',
      bio: 'Known as Mark but also a real nice guy'
    }
  ];


  // Change this to an array of instructors.  Use ngFor in the template to loop through the array

  calculateYears(stDate: Date): number {
    const today = new Date();
    const startDate = new Date(stDate);

    // Calculate the difference between today and the birthdate
    let age = today.getFullYear() - startDate.getFullYear();

    // Adjust the age if the birthdate hasn't occurred yet this year
    if (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())) {
      age--;
    }

    return age;
  }


}

