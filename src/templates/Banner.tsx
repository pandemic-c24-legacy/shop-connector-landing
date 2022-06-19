import { CTABanner } from '../components/cta/CTABanner';
import EmailForm from '../components/form/EmailForm';
import { Section } from '../components/layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Start using our Check24 integration for your Shopify store"
      subtitle="Work smarter not harder"
      emailForm={<EmailForm />}
    />
  </Section>
);

export { Banner };
