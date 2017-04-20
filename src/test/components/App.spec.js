import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import App from '../../components/App.ui';
import todos from '../../data/todos';

describe('App',() => {

  it('should render todo list',() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App todos={todos} />);
    const actual = renderer.getRenderOutput();
    const expected = (
      <ul>
        <li>Task1</li>
        <li>Task2</li>
        <li>Task3</li>
      </ul>
    );
    expect(actual).toIncludeJSX(expected);
  });

  it('should render loading',() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App todos={[]} />);
    const actual = renderer.getRenderOutput();
    const expected = <div>Loading...</div>;
    expect(actual).toIncludeJSX(expected);
  });

})
