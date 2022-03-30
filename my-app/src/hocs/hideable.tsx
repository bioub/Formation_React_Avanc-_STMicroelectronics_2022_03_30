import { Component, ComponentType } from "react"; 

type HideableProps = {
  defaultShow?: boolean;
}

export function hideable<BaseProps>(BaseComponent: ComponentType<BaseProps>) {
  type HocProps = BaseProps & HideableProps;

  class EnhancedComponent extends Component<HocProps> {
    static displayName = `hideable(${BaseComponent.name})`;
    state = {
      show: this.props.defaultShow,
    };
    handleClick = () => {
      const { show } = this.state;
      this.setState({
        show: !show
      })
    }
    render() {
      const { defaultShow, ...wrappedProps } = this.props;
      const { show } = this.state;
      return (
        <div>
          {show && <BaseComponent {...wrappedProps as BaseProps} />}
          <button onClick={this.handleClick}>{show ? 'Off' : 'On'}</button>
        </div>
      );
    }
  }

  return EnhancedComponent;
}