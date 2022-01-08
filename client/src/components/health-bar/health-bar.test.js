import { render } from '@testing-library/react';

import HealthBar from './health-bar';

describe("HealthBar", () => {
  it('should render level 1', () => {
    const { container } = render(<HealthBar level={1} />);
    expect(container.getElementsByClassName('level')).toHaveLength(3);
    expect(container.getElementsByClassName('low')).toHaveLength(1);
    expect(container.getElementsByClassName('medium')).toHaveLength(0);
    expect(container.getElementsByClassName('healthy')).toHaveLength(0);
  })

  it('should render level 2', () => {
    const { container } = render(<HealthBar level={2} />);
    expect(container.getElementsByClassName('level')).toHaveLength(3);
    expect(container.getElementsByClassName('low')).toHaveLength(0);
    expect(container.getElementsByClassName('medium')).toHaveLength(2);
    expect(container.getElementsByClassName('healthy')).toHaveLength(0);
  })

  it('should render level 3', () => {
    const { container } = render(<HealthBar level={3} />);
    expect(container.getElementsByClassName('level')).toHaveLength(3);
    expect(container.getElementsByClassName('low')).toHaveLength(0);
    expect(container.getElementsByClassName('medium')).toHaveLength(0);
    expect(container.getElementsByClassName('healthy')).toHaveLength(3);
  })
})