import {createHooks} from './hooks';
import {render as updateElement} from './render';

function MyReact() {
  let _root;
  let _currentNode;
  let _targetIndex = 0;
  let _renderFunction;

  const _render = () => {
    resetHookContext();
    const newNode = _renderFunction();
    updateElement(_root, newNode, _currentNode, _targetIndex);
    _currentNode = newNode;
  };

  function render($root, rootComponent) {
    resetHookContext();
    const newElement = rootComponent();
    const {newNode, index} = updateElement($root, newElement);
    _root = $root;
    _currentNode = newNode;
    _targetIndex = index;
    _renderFunction = rootComponent;
  }

  const {useState, useMemo, resetContext: resetHookContext} = createHooks(_render);

  return {render, useState, useMemo};
}

export default MyReact();
