import React from 'react';

type TitleProps = {
  title: string
}

type ContentProps = {
  content: string
}


type Props = {
  renderTitle(props: TitleProps): JSX.Element;
  renderContent?(props: ContentProps): JSX.Element;
}

function DemoRenderPropsWithComponent({ renderTitle: Title, renderContent: Content }: Props) {
  const title = 'My Title';
  const content = 'My Content';

  return (
    <div className="DemoRenderPropsWithComponent">
      {/* <h2>{title}</h2> */}
      <Title title={title} />
      {/* <p>{content}</p> */}
      {Content ? <Content content={content} /> : <p>{content}</p>}
    </div>
  );
}

export default DemoRenderPropsWithComponent;
