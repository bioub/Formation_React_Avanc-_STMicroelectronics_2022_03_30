import styles from './Select.module.css';
import React, { Component, createRef, MouseEvent } from 'react';

type Props = {
  items: string[];
  selected: string;
  onSelected(selected: string): void;
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
    const { items, selected, onSelected } = this.props;
    const { open } = this.state;

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      this.setState({
        open: !open,
      });
    };

    return (
      <div className="Select" onClick={handleClick} ref={this.hostRef}>
        <div className={styles.value}>{selected}</div>
        {open && (
          <div className={styles.menu}>
            {items.map((item) => (
              <div key={item} onClick={() => onSelected(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
