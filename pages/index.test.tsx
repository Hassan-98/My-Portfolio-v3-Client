import { render } from '@testing-library/react';
//= MSW Requests
import { serverRequests } from '@/tests/server';
//= Mock Data
import mockData from '@/__mocks__/header-info';
//= Component
import HomePage, { getServerSideProps, type IProps } from './index';

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
    path: '/experience',
    method: 'get',
    handler: () => {
      return {
        data: mockData.experiences
      };
    },
  },
  {
    path: '/skills',
    method: 'get',
    handler: () => {
      return {
        data: mockData.skills
      };
    },
  },
  {
    path: '/works',
    method: 'get',
    handler: () => {
      return {
        data: mockData.works
      };
    },
  },
  {
    path: '/certificates',
    method: 'get',
    handler: () => {
      return {
        data: mockData.certificates
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


describe('Test home page requests', () => {
  it(`test home page props`, async () => {
    const { props } = (await getServerSideProps()) as { props: IProps }
    const { container } = render(<HomePage {...props} />);

    expect(container).toBeInTheDocument();

    expect(props.aboutInfo).toEqual(mockData.aboutInfo);
    expect(container).toHaveTextContent(props.aboutInfo.header.jobTitle);
    expect(container).toHaveTextContent(props.aboutInfo.header.descriptionText);
    expect(container).toHaveTextContent(props.aboutInfo.intro.aboutMe);

    expect(props.skills).toHaveLength(mockData.skills.length);
    expect(props.certificates).toHaveLength(mockData.certificates.length);
    expect(props.experiences).toHaveLength(mockData.experiences.length);
    expect(props.works).toHaveLength(mockData.works.length);
    expect(props.testimonials).toHaveLength(mockData.testimonials.length);
  });
});
