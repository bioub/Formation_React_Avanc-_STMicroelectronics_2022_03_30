import styles from './Select.module.css';
import React, { Component, createRef, MouseEvent } from 'react';

export type ItemProps = {
  item: string;
  onClick(): void;
}

type Props = {
  items: string[];
  selected: string;
  onSelected(selected: string): void;
  renderValue?: JSX.Element;
  componentItem: React.ComponentType<ItemProps>;
};

type State = {
  readonly open: boolean;
};

class SelectRenderItemComp extends Component<Props, State> {
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
    const { items, selected, onSelected, renderValue, componentItem: Item } = this.props;
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
      <div className="SelectRenderItemComp" onClick={handleClick} ref={this.hostRef}>
        <div className={styles.value}>{renderValue ? renderValue : selected}</div>
        {open && (
          <div className={styles.menu}>
            {items.map((item) => (
              <Item key={item} item={item} onClick={() => onSelected(item)} />
              // <div key={item} onClick={() => onSelected(item)}>{renderItem ? renderItem(item) : item}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SelectRenderItemComp;
