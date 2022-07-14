// remove Text newline (referenced Jul 2022): https://stackoverflow.com/a/70289492/14257952

import { React, useState } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-native-paper';

// custom
import { PageStyler } from './PageStyler.js';
import { ContextHeader } from '../common/ContextHeader.js';
import { layoutStyles } from '../../assets/stylesheets/layouts.js';
import { textStyles } from '../../assets/stylesheets/text.js';
import { ChapterSelectButton } from '../buttons/ChapterSelectButton.js';
import { ChapterSelectModal } from '../common/ChapterSelectModal.js';

// example for API route GET /verses/:bookName/:chapterNumber
// regular 0-indexed array of one string per verse (no spaces is slightly preferred, but whatever is easier with sample data)
const sampleChapter = [
  'In the beginning, God created the heavens and the earth.',
  'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
  'And God said, “Let there be light,” and there was light.',
  'And God saw that the light was good. And God separated the light from the darkness.',
  'God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
  'And God said, “Let there be an expanse in the midst of the waters, and let it separate the waters from the waters.” And God made the expanse and eseparated the waters that were under the expanse from the waters that were fabove the expanse. And it was so.',
  'And God called the expanse Heaven. And there was evening and there was morning, the second day.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue'
];

const ReadingPage = () => {
  const [currentBook, setCurrentBook] = useState('Genesis');
  const [currentChapter, setCurrentChapter] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const handleChapterSelect = ({book, chapter}) => {
    console.log(`chapter selected! Excellent choice. Navigating to ${book} ${chapter}`);
  };

  return (
    <>
      <Provider>
        <ContextHeader
          customHeadingComponent={
            <ChapterSelectButton label={`${currentBook} ${currentChapter}`} onPress={openModal}></ChapterSelectButton>
          }
        >
        </ContextHeader>
        <ChapterSelectModal visible={modalIsOpen} setVisible={setModalIsOpen} onChapterSelect={handleChapterSelect}></ChapterSelectModal>
        <PageStyler customPageStyle={layoutStyles.readingPage}>
          <Text>
            {sampleChapter.map((verseText, index) =>
              <Text key={'v' + index}>
                {/* verse number */}
                <Text style={textStyles.superscript}>{index + 1}</Text>
                <Text>{' ' + verseText + ' '}</Text>
              </Text>
            )}
          </Text>
        </PageStyler>
      </Provider>
    </>
  );
};

export { ReadingPage };
