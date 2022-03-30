import styles from './Select.module.css';
import React, { Component, createRef, MouseEvent } from 'react';
import { hideable } from './hocs/hideable';

type Props = {
  items: string[];
  selected: string;
  onSelected(selected: string): void;
  renderValue?: JSX.Element;
  renderItem?(item: string): JSX.Element | string;
};

type State = {
  readonly open: boolean;
};

class Select extends Component<Props, State> {
  readonly state: State = {
    open: false,
  };

  hostRef = createRef<HTMLDivElement>();

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (this.hostRef.current?.contains(event.target as Node)) {
        return;
      }
      
      this.setState({
        open: false,
      });
    });
  }

  render() {
    const { items, selected, onSelected, renderValue, renderItem } = this.props;
    const { open } = this.state;

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      // console.log(event.target.title);
      // console.log(event.currentTarget.title);
      // event.stopPropagation();
      this.setState({
        open: !open,
      });
    };

    return (
      <div className="Select" onClick={handleClick} ref={this.hostRef}>
        <div className={styles.value}>{renderValue ? renderValue : selected}</div>
        {open && (
          <div className={styles.menu}>
            {items.map((item) => (
              <div key={item} onClick={() => onSelected(item)}>{renderItem ? renderItem(item) : item}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export const SelectHideable = hideable<Props>(Select);

export default Select;
