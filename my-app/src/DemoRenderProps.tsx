import React from 'react';

type Props = {
  renderTitle(title: string): JSX.Element;
  renderContent?(content: string): JSX.Element;
}

function DemoRenderProps({ renderTitle, renderContent }: Props) {
  const title = 'My Title';
  const content = 'My Content';

  return (
    <div className="DemoRenderProps">
      {/* <h2>{title}</h2> */}
      {renderTitle(title)}
      {/* <p>{content}</p> */}
      {renderContent ? renderContent(content) : <p>{content}</p>}
    </div>
  );
}

export default DemoRenderProps;
