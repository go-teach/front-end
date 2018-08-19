import React from 'react';
import { shallow } from 'enzyme';
import { ProfileScreen } from './ProfileScreen';

describe('ProfileScreen component', () => {
	it('should return proper component', () => {
		const wrapper = shallow(<ProfileScreen isLoggedIn />);
		expect(wrapper).toMatchSnapshot();
	});
});
