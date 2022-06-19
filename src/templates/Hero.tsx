import Link from 'next/link';

import { Background } from '../components/background/Background';
import EmailForm from '../components/form/EmailForm';
import { HeroEmailForm } from '../components/hero/HeroEmailForm';
import { Section } from '../components/layout/Section';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Shopify</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Check24</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroEmailForm
        title={
          <>
            {'The easiest way to sell on Check24 for\n'}
            <span className="text-primary-500">Shopify sellers</span>
          </>
        }
        description="List your products on the Check24 marketplace and process orders automatically"
        emailForm={<EmailForm />}
      />
    </Section>
  </Background>
);

export { Hero };
