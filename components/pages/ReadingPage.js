// remove Text newline (referenced Jul 2022): https://stackoverflow.com/a/70289492/14257952

import { React, useEffect, useState } from 'react';
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
const mockChapterText = {
  'Genesis': [
    [
      'In the beginning, God created the heavens and the earth.',
      'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
      'And God said, “Let there be light,” and there was light.',
      'And God saw that the light was good. And God separated the light from the darkness.',
      'God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
      'And God said, “Let there be an expanse in the midst of the waters, and let it separate the waters from the waters.” And God made the expanse and eseparated the waters that were under the expanse from the waters that were fabove the expanse. And it was so.',
      'And God called the expanse Heaven. And there was evening and there was morning, the second day.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue'
    ],
    [
      'Wilkommen sa Genesis 2.',
      'In the beningging.',
      'In the benig...',
      'In the binignit--',
      'In the beginging.'
    ]
  ],
  'Revelation': [
    [
      'Scary scary scary.',
      'Big scary apocalypse.',
      'Then happy forever after!'    
    ],
    [
      'Abueno adios, Master.',
      'Revelation chapter 2 is the scolding.',
      'Nothing to see here...'
    ]
  ]
};

const ReadingPage = () => {
  const [currentBookName, setCurrentBookName] = useState('Genesis');
  const [currentChapterNumber, setCurrentChapterNumber] = useState(1);
  const [currentVerseList, setCurrentVerseList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentBookAndChapterString, setCurrentBookAndChapterString] = useState('');

  const openModal = () => setModalIsOpen(true);
  const handleChapterSelect = ({book, chapter}) => {
    console.log(`chapter selected! Excellent choice. Navigating to ${book} ${chapter}`);
    setCurrentBookName(book);
    setCurrentChapterNumber(chapter);
  };

  // set current verse list based on current book & chapter selection
  useEffect(() => {
    try {
      currentBookName && currentChapterNumber &&
      setCurrentVerseList(mockChapterText[currentBookName][currentChapterNumber - 1]);

      setCurrentBookAndChapterString(`${currentBookName} ${currentChapterNumber}`);
    } catch (error) {
      console.error(`Selection ${currentBookName} ${currentChapterNumber} is not part of the current data set`);
    }
  }, [currentBookName, currentChapterNumber]);

  return (
    <>
      <Provider>
        <ContextHeader
          customHeadingComponent={
            <ChapterSelectButton label={currentBookAndChapterString} onPress={openModal}></ChapterSelectButton>
          }
        >
        </ContextHeader>
        <ChapterSelectModal visible={modalIsOpen} setVisible={setModalIsOpen} onChapterSelect={handleChapterSelect}></ChapterSelectModal>
        <PageStyler customPageStyle={layoutStyles.readingPage}>
          <Text>
            {currentVerseList.map((verseText, index) =>
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
