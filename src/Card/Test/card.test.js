import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '../'

describe('Card', () => {
  let wrapper;
  let mockToggleFavs = jest.fn();
  let mockEvent

  beforeEach(() => {
        wrapper = shallow(<Card 
                        individual={{species: 'human'}}
                        toggleFavorites={mockToggleFavs}
                        isFavorite={true}
                      />)
  })

  it('matches the snapShot', () => {


    expect(wrapper).toMatchSnapshot();
  })

  it('renders the correct card for the type of individual', () => {
    expect(wrapper.find('.person').length).toEqual(1);
    expect(wrapper.find('.vehicle').length).toEqual(0);
    expect(wrapper.find('.favorite').length).toEqual(1);
  })

  it('should call toggleFavorites on click of button', () => {
    wrapper.find('button').simulate('click')
    expect(mockToggleFavs).toHaveBeenCalled();
  })

  it('should call displayResidents if individual is a planet', () => {
    wrapper = shallow(<Card 
                    individual={{residents: ['one','two']}}
                    toggleFavorites={mockToggleFavs}
                    isFavorite={true}
                  />)

    expect(wrapper.find('li').length).toEqual(2)
  })

  it('should apply className of favorite if isFavorite is true', () => {
    wrapper = shallow(<Card 
                    individual={{residents: ['one','two']}}
                    toggleFavorites={mockToggleFavs}
                    isFavorite={false}
                  />)
    expect(wrapper.find('.favorite').length).toEqual(0)
  })

  it('should render the appropriate class name on the card', () => {
        wrapper = shallow(<Card 
                    individual={{vehicle_class: "clunker"}}
                    toggleFavorites={mockToggleFavs}
                    isFavorite={false}
                  />)
        expect(wrapper.find('.vehicle').length).toEqual(1);
        expect(wrapper.find('.favorite').length).toEqual(0);
  })
})