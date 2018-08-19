import React from 'react';
import { shallow } from 'enzyme';
import { MainScreen } from './MainScreen';

describe('MainScreen component', () => {
	it('should return proper component', () => {
		const mockedFunc1 = jest.fn();
		const mockedFunc2 = jest.fn();
		const wrapper = shallow(<MainScreen navToRegister={mockedFunc1} navToProfile={mockedFunc2} />);
		expect(wrapper).toMatchSnapshot();
	});
});
