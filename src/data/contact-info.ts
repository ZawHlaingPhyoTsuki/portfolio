import { ContactMethod } from '@/types';
import { Location01Icon, Mail01Icon } from '@hugeicons/core-free-icons';

export const contactInfo: ContactMethod[] = [
  {
    icon: Mail01Icon,
    title: 'Email',
    description:
      'Have a question or need help? Drop me an email and I will respond within 24 hours.',
    value: 'tro2233zhp@gmail.com',
    href: 'mailto:tro2233zhp@gmail.com',
  },
  // {
  //   icon: PhoneIcon,
  //   title: 'Phone',
  //   description: 'Prefer to chat? Give me a call Monday to Friday, 9 AM to 5 PM.',
  //   value: '+66 99 397 0485',
  //   href: 'tel:+66993970485',
  // },
  {
    icon: Location01Icon,
    title: 'Location',
    description: 'Based in Bangkok, Thailand. Open to remote opportunities worldwide.',
    value: 'Bangkok, Thailand',
  },
];
