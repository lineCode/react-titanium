// Generated by scripts/generate-built-ins

import { register } from '../ReactTitaniumBridge';

register('image', 'Ti.UI.ImageView', {
  textProperty: undefined,
  factory: props => Ti.UI.createImageView(props)
});
