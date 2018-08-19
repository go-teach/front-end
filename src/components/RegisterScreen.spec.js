import React from 'react';
import { shallow } from 'enzyme';
import { RegisterScreen } from './RegisterScreen';

describe('RegisterScreen component', () => {
	it('should return proper component', () => {
		const mockedFunc1 = jest.fn();
		const mockedFunc2 = jest.fn();
		const wrapper = shallow(<RegisterScreen loggingIn={mockedFunc1} navToProfile={mockedFunc2} />);
		expect(wrapper).toMatchSnapshot();
	});
});
