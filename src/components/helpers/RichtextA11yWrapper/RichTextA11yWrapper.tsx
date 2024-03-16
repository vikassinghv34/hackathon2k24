import React from 'react';

interface HtmlContentProps {
  content: string;
}

export const HtmlContent: React.FC<HtmlContentProps> = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
