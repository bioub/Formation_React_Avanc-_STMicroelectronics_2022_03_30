import React, { Component } from 'react';
import { ItemProps } from './SelectRenderItemComp';

// function SelectItem({item}: ItemProps) {
//   return (
//     <b className="SelectItem">
//       {item}
//     </b>
//   );
// }

class SelectItem extends Component<ItemProps> {
  render() {
    const { item, onClick } = this.props;
    return <b className="SelectItem" onClick={onClick}>{item}</b>;
  }
}

export default SelectItem;
