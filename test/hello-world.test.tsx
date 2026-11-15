import { render } from '@testing-library/react-native';

import HelloScreen from '../src/app/index';

describe('ekran Hello World', () => {
  it('wyświetla powitanie jako nagłówek', async () => {
    const { getByRole } = await render(<HelloScreen />);

    expect(getByRole('header', { name: 'Hello World' })).toBeTruthy();
  });
});
