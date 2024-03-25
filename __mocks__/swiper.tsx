jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}))

jest.mock('swiper', () => ({
  Navigation: (props: any) => null,
  Pagination: (props: any) => null,
  Scrollbar: (props: any) => null,
  A11y: (props: any) => null,
  Autoplay: (props: any) => null,
}))