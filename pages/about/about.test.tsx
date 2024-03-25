import { render } from '@testing-library/react';
//= MSW Requests
import { serverRequests } from '@/tests/server';
//= Mock Data
import mockData from '@/__mocks__/header-info';
//= Component
import AboutPage, { getServerSideProps, type IProps } from './index';

serverRequests([
  {
    path: '/general',
    method: 'get',
    handler: () => {
      return {
        data: mockData.aboutInfo
      };
    },
  },
  {
    path: '/testimonials',
    method: 'get',
    handler: () => {
      return {
        data: mockData.testimonials
      };
    },
  },
]);


describe('Test about page requests', () => {
  it(`test about page props`, async () => {
    const { props } = (await getServerSideProps()) as { props: IProps }
    const { container } = render(<AboutPage {...props} />);

    expect(container).toBeInTheDocument();

    expect(props.aboutInfo).toEqual(mockData.aboutInfo);
    expect(container).toHaveTextContent(props.aboutInfo.header.jobTitle);
    expect(container).toHaveTextContent(props.aboutInfo.header.descriptionText);
    expect(container).toHaveTextContent(props.aboutInfo.intro.aboutMe);

    expect(props.testimonials).toHaveLength(mockData.testimonials.length);
  });
});