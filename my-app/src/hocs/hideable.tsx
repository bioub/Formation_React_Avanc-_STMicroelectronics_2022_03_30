import { Component, ComponentType } from "react"; 

interface InjectedProps {
  defaultShow?: boolean;
}

export function hideable<BaseProps extends InjectedProps>(WrappedComponent: ComponentType<BaseProps>) {
  type HocProps = any;

  class EnhancedComponent extends Component<HocProps> {
    static displayName = `hideable(${WrappedComponent.name})`;
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
          {show && <WrappedComponent {...wrappedProps as BaseProps} />}
          <button onClick={this.handleClick}>{show ? 'Off' : 'On'}</button>
        </div>
      );
    }
  }

  return EnhancedComponent;
}