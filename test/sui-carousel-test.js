import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {createComponent} from './utilities';
import expect from 'expect';
import Carousel from '../src/sui-carousel';

describe('sui-carousel component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(Carousel).toNotBe(undefined);
    });
  });

  describe('sui-carousel renders properly', function () {
    let component;

    beforeEach(() => {
      component = createComponent(Carousel);
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
