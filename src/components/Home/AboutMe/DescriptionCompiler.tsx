import React from 'react';
//= Styles
import cls from './aboutme.module.scss';

function DescriptionCompiler({ text }: { text: string }) {
  function compileContent(content: string) {
    // Compile New Lines
    let compiledContent = content.replaceAll('#', `<i class="${cls.splitter}"></i>`);

    // Compile Bold Texts
    const HighlightedTexts = content.match(/(?<=\[\*)(.*?)(?=\*\])/g);
    HighlightedTexts?.forEach(txt => {
      compiledContent = compiledContent.replace(txt, `<span class="${cls.highlight}">${txt}</span>`);
    });
    compiledContent = compiledContent.replaceAll('[*', '');
    compiledContent = compiledContent.replaceAll('*]', '');


    // Compile Bold Texts
    const underlinedTexts = content.match(/(?<=_\*)(.*?)(?=\*_)/g);
    underlinedTexts?.forEach(txt => {
      compiledContent = compiledContent.replace(txt, `<span class="${cls.underlined}">${txt}</span>`);
    });
    compiledContent = compiledContent.replaceAll('_*', '');
    compiledContent = compiledContent.replaceAll('*_', '');
    return compiledContent;
  }

  return (
    <p dangerouslySetInnerHTML={{ __html: compileContent(text) }}></p>
  )
}

export default DescriptionCompiler