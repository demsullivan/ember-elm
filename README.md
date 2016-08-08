# Ember Elm

Ember Elm is an Ember add-on component that allows you to embed Elm components into an Ember app. This is inspired by [https://github.com/evancz/react-elm-components](Evan Czaplicki's React Elm component), built with the idea that the best
way to introduce Elm to your workplace is to start small in an existing app. This component will help you do just that
with an Ember app.

## Todo

* Add node-elm-compiler support to the Ember build process.
* Build an example app.


## Getting Started

This is still a work-in-progress and thus I haven't officially released it yet for use in the wild.

## Example

```
# app/controllers/todo.js

import Ember from 'ember';
import Todo from '../elm-components/Todo';

export default Ember.Controller.extend({
    todo: Todo,

    actions: {
      addItem() {
        let instance = this.get('todoInstance');
        instance.ports.todos.send(this.get('todoEntry'));
      },

      activeTodosChanged(n) {
        let instance = this.get('todoInstance');
        console.log(n);
        todo.ports.todos.send('Invent the Universe');
        todo.ports.todos.send('Bake an Apple Pie');
      }
    }
});

# app/templates/todo.hbs

{{#elm-component component=todo instance=todoInstance numActiveTodosPort=(action "activeTodosChanged")}}
```
