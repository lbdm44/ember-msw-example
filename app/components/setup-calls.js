import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SetupCallsComponent extends Component {
  @action
  setup() {
    alert('Setup Called');
  }
}
