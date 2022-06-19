import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  emailForm: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
    <div className="text-xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>
    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      {props.emailForm}
    </div>
  </div>
);

export { CTABanner };
