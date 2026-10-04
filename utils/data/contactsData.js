import { getPersonalData } from './localized-content';

const personal = getPersonalData('en');

export const contactsData = {
  email: personal.email,
  phone: personal.phone,
  address: personal.address,
  github: personal.github,
  facebook: personal.facebook,
  linkedIn: personal.linkedIn,
  twitter: personal.twitter,
  stackOverflow: personal.stackOverflow,
  devUsername: personal.devUsername,
};
