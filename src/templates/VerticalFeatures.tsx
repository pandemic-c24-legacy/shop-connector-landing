import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Connect Shopify with the Check24 marketplace"
    description="Sync automatically your store with Check24, list your products on the marketplace and import all your orders, automatically."
  >
    <VerticalFeatureRow
      title="Increase sales by reaching out to new customers"
      description="List your Shopify products on the Check24 marketplace - with more than 10 million visitors per month. Add a new revenue stream within minutes."
      image="/assets/images/feature2.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Never process your orders manually again"
      description="Our integration automatically imports incoming Check24 orders into your Shopify shop. Set-it up and let the technonlogy do the tedious work for you."
      image="/assets/images/feature.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Protect your business without technical skills"
      description="Connect to your accounts and and start selling within minutes. We do all the job for you, without saving your data on our systems."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
