import Ember from 'ember';

export default Ember.Component.extend({
  flags: null,
  component: null,

  renderElmComponent: Ember.on('didInsertElement', function() {
    let component = this.get('component');

    let instance = component.embed(this.element, this.get('flags'));
    this.set('instance', instance);

    for (var portName in instance.ports) {
      if (instance.ports[portName].subscribe) {
        instance.ports[portName].subscribe(() => {
          this.sendAction(`${portName}Port`, ...arguments);
        });
      }
    }
  })
});
