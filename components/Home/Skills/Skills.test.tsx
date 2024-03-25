import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//= Component
import Skills from './index';
//= Mock Data
import mockData from '@/__mocks__/header-info';
//= Style Classes
import classes from './skills.module.scss'

it(`Test smallerPadding prop`, () => {
  const { container } = render(<Skills smallerPadding data={[]} />);

  const skillsContainer = container.querySelector(`.${classes.skills}`);
  expect(skillsContainer).toHaveClass(classes.smallerPadding);
})

it(`Test if smallerPadding prop is not provided`, () => {
  const { container } = render(<Skills data={[]} />);

  const skillsContainer = container.querySelector(`.${classes.skills}`);
  expect(skillsContainer).not.toHaveClass(classes.smallerPadding);
})

it(`Test 3 tab buttons initially exists`, () => {
  const { container } = render(<Skills data={mockData.skills} />);

  const tabButtons = container.querySelectorAll(`.${classes.item}`);
  expect(tabButtons).toHaveLength(3);
})

it(`Test 3 tab contents initially exists`, () => {
  const { container } = render(<Skills data={mockData.skills} />);

  const tabs = container.querySelectorAll(`.${classes.tab}`);
  expect(tabs).toHaveLength(3);
})

it(`Test one tab button is active and it's related tab content is active`, () => {
  const { container } = render(<Skills data={mockData.skills} />);

  const activeButton = container.querySelector(`.${classes.item}.${classes.active}`);
  expect(activeButton).toBeInTheDocument();

  const buttonId = activeButton!.id.split('-btn')[0];

  const relatedTabContent = container.querySelector(`.${classes.tab}#${buttonId}`);
  expect(relatedTabContent).toHaveClass(classes.active);
})


it(`Test click on tab button to be active, and it's related tab content is active, and there is one active button`, async () => {
  const { container } = render(<Skills data={mockData.skills} />);

  const notActiveButton = container.querySelector(`.${classes.item}:not(.${classes.active})`);
  const buttonId = notActiveButton!.id.split('-btn')[0];

  await userEvent.click(notActiveButton!);

  const relatedTabContent = container.querySelector(`.${classes.tab}#${buttonId}`);
  expect(relatedTabContent).toHaveClass(classes.active);

  const activeButtons = container.querySelectorAll(`.${classes.item}.${classes.active}`);
  expect(activeButtons).toHaveLength(1);
})

it(`Test pass an empty array as prop`, () => {
  const { container } = render(<Skills data={[]} />);

  const tabsSkillList = container.querySelectorAll(`.${classes.tab} ul`);
  expect(tabsSkillList).toHaveLength(6);
  Array.from(tabsSkillList).forEach((skillList) => {
    expect(skillList).toBeEmptyDOMElement();
  })
})

it(`Test render skill array properly`, () => {
  const { container } = render(<Skills data={mockData.skills} />);

  const frontStackSkillList = container.querySelector(`.${classes.tab}#front-end ul`);
  expect(frontStackSkillList!.children).toHaveLength(2);

  expect(frontStackSkillList!.children[0]).toHaveTextContent(mockData.skills[0].skill.name);
  expect(frontStackSkillList!.children[1]).toHaveTextContent(mockData.skills[1].skill.name);
})

it(`Test render compitable skill image`, () => {
  const { container } = render(<Skills data={mockData.skills} />);

  const compitableImageContainers = container.querySelectorAll(`.${classes.compitable}`);

  expect(compitableImageContainers).toHaveLength(1);
})