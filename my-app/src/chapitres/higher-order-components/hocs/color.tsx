import { ComponentType } from "react";

type EnhancedProps = {
  color: string;
}

export function color<BaseProps>(BaseComponent: ComponentType<BaseProps>) {
  type CombinedProps = EnhancedProps & BaseProps;
  function EnhancedComponent(props: CombinedProps) {
    const { color, ...baseProps } = props;
    return (
      <div style={{color: color}}>
        <BaseComponent {...baseProps as any} />
      </div>
    );
  }

  EnhancedComponent.displayName = `color(${BaseComponent.displayName ?? BaseComponent.name})`

  return EnhancedComponent;
}