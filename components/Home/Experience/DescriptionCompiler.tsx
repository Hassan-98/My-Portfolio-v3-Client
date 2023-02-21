import React from 'react';
//= Styles
import classes from './experience.module.scss';

function DescriptionCompiler({ content }: { content: string }): JSX.Element {
  // Compile New Lines
  let compiledContent = `<li>` + content.replaceAll('#', `</li><li>`);
  compiledContent += '</li>';

  // Compile Bold Texts
  const Bold_Texts = content.match(/(?<=\[\*)(.*?)(?=\*\])/g);
  Bold_Texts?.forEach(text => {
    compiledContent = compiledContent.replace(text, `<b>${text}</b>`);
  });
  compiledContent = compiledContent.replaceAll('[*', '');
  compiledContent = compiledContent.replaceAll('*]', '');

  // Compile Italic Texts
  const Italic_Texts = content.match(/(?<=\[\/)(.*?)(?=\/\])/g);
  Italic_Texts?.forEach(text => {
    compiledContent = compiledContent.replace(text, `<i>${text}</i>`);
  });
  compiledContent = compiledContent.replaceAll('[/', '');
  compiledContent = compiledContent.replaceAll('/]', '');

  // Compile Underlined Texts
  const Underlined_Texts = content.match(/(?<=\[\_)(.*?)(?=\_\])/g);
  Underlined_Texts?.forEach(text => {
    compiledContent = compiledContent.replace(text, `<u>${text}</u>`);
  });
  compiledContent = compiledContent.replaceAll('[_', '');
  compiledContent = compiledContent.replaceAll('_]', '');

  return (
    <ul className={classes.job_items} dangerouslySetInnerHTML={{ __html: compiledContent }}></ul>
  );
}

export default DescriptionCompiler