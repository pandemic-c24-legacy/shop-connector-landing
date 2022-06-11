import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Start using our Check24 integration for your Shopify store"
      subtitle="Work smarter not harder"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Request early access</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
