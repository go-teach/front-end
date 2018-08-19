import React from 'react';
import { shallow } from 'enzyme';
import LoginStatusMessage from './LoginStatusMessage';

describe('LoginStatusMessage component', () => {
	it('should return proper component', () => {
		const wrapper = shallow(<LoginStatusMessage isLoggedIn={true}/>);
		expect(wrapper).toMatchSnapshot();
	});
});
