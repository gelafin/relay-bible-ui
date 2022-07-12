import { React } from 'react';
import { Text } from 'react-native';

// custom
import { PageStyler } from './PageStyler.js';
import { ContextHeader } from '../common/ContextHeader.js';

const sampleText = `
    The Creation of the World
    1 In the abeginning, God created the heavens and the earth. 2 The earth was bwithout form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.

    3 And God said, c“Let there be light,” and there was light. 4 And God saw that the light was good. And God separated the light from the darkness. 5 God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.

    6 And God said, d“Let there be an expanse1 in the midst of the waters, and let it separate the waters from the waters.” 7 And God made2 the expanse and eseparated the waters that were under the expanse from the waters that were fabove the expanse. And it was so. 8 And God called the expanse Heaven.3 And there was evening and there was morning, the second day.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue`;

const ReadingPage = () => {
  return (
    <>
      <ContextHeader headingText="Top o' the reading page to you, laddies"></ContextHeader>
      <PageStyler>
        <Text>{sampleText}</Text>
      </PageStyler>
    </>
  );
};

export { ReadingPage };
