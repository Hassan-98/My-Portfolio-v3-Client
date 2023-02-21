import React from 'react';
//= Styles
import classes from './aboutme.module.scss';

function DescriptionCompiler({ text }: { text: string }) {
  function compileContent(content: string) {
    // Compile New Lines
    let compiledContent = content.replaceAll('#', `<i class="${classes.splitter}"></i>`);

    // Compile Bold Texts
    const HighlightedTexts = content.match(/(?<=\[\*)(.*?)(?=\*\])/g);
    HighlightedTexts?.forEach(txt => {
      compiledContent = compiledContent.replace(txt, `<span class="${classes.highlight}">${txt}</span>`);
    });
    compiledContent = compiledContent.replaceAll('[*', '');
    compiledContent = compiledContent.replaceAll('*]', '');

    return compiledContent;
  }

  return (
    <p dangerouslySetInnerHTML={{ __html: compileContent(text) }}></p>
  )
}

export default DescriptionCompiler