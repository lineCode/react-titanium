import { register } from '../ReactTitaniumBridge';

register('ipad-popover', 'Ti.UI.iPad.Popover', {
  factory: props => Ti.UI.iPad.createPopover(props)
});
