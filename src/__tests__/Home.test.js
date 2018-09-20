import React from 'react';
import { Home } from '../components/containers/Home/Home';
import { shallow } from 'enzyme';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import Joke from '../components/Joke/Joke';

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home onFetchCategories={() => {}} onSelectedCategory={() => {}}/>);
  });

  it('should render <CategoriesList /> after receiving categories', () => {
    wrapper.setProps({categories:{category: 'music'}});
    expect(wrapper.find(CategoriesList)).toHaveLength(1);
  });
  it('should render <Joke /> after receiving joke', () => {
    wrapper.setProps({joke:{value: 'some joke'}});
    expect(wrapper.find(Joke)).toHaveLength(1);
  })
});