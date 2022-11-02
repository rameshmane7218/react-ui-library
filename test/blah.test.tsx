import React from 'react';
import { render } from '@testing-library/react';
import { Default as Thing } from '../stories/Thing.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    render(<Thing />);
  });
});
