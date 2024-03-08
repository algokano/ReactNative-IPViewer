import React from 'react';
import { render } from '@testing-library/react-native';
import NetworkInfo from '../NetworkInfo';

describe('NetworkInfo', () => {
  test('renders correctly with provided data', () => {
    const ipAddress = '192.168.1.1';
    const location = 'City, Country';
    const timezone = 'UTC+2';
    const isp = 'Internet Provider';

    const { getByText } = render(
      <NetworkInfo ipAddress={ipAddress} location={location} timezone={timezone} isp={isp} />
    );

    expect(getByText('IP Address')).toBeDefined();
    expect(getByText(ipAddress)).toBeDefined();
    expect(getByText('Location')).toBeDefined();
    expect(getByText(location)).toBeDefined();
    expect(getByText('Timezone')).toBeDefined();
    expect(getByText(`UTC ${timezone}`)).toBeDefined();
    expect(getByText('ISP')).toBeDefined();
    expect(getByText(isp)).toBeDefined();
  });

  test('renders correctly with undefined data', () => {
    const { getByText } = render(<NetworkInfo />);
    expect(getByText('IP Address')).toBeDefined();
    expect(getByText('Location')).toBeDefined();
    expect(getByText('Timezone')).toBeDefined();
    expect(getByText('ISP')).toBeDefined();
  });
});