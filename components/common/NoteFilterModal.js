import { React, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Provider, Portal, Dialog, Button } from 'react-native-paper';
import { sampleNotes } from '../pages/NotesPage';

// custom components
import { FormLabel } from './FormLabel';

/**
 * @param onSubmit: called with argument object
 *  {
 *    selectedVerses: [Verse]
 *  }
 */
const NoteFilterModal = ({setShouldShowDialog, onSubmit, onCancel, initialFilterSettings}) => {
  const [filterSettings, setFilterSettings] = useState(initialFilterSettings || {});
  const hideDialog = () => setShouldShowDialog(false);

  const handleCancel = () => {
    hideDialog();
    onCancel && onCancel();
  };

  function handleSubmit() {
    console.log('*submitting filter settings ', filterSettings);
    hideDialog();
    onSubmit(filterSettings);
  }

  // DEBUG
  useEffect(() => console.log('\tfilter settings changed:', filterSettings), [filterSettings]);

  const handleRelatedVersesChange = newRelatedVerses => {
    console.log('\tsetting new filter settings ', {...filterSettings, selectedVerses: [...newRelatedVerses]});
    setFilterSettings((filterSettings) => ({...filterSettings, selectedVerses: [...newRelatedVerses]}));
  };

  // TODO: remove after testing
  useEffect(() => {
    console.log('DEBUG: on mount, setting linked verses to ', sampleNotes[0].linkedVerses);
    handleRelatedVersesChange(sampleNotes[0].linkedVerses)}, []);

  return (
    <Provider>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog}>
          <Dialog.Title>
            <Text>Filters</Text>
          </Dialog.Title>
          <Dialog.Content>
            <FormLabel label="Related verses"></FormLabel>
            <Text>TODO: button here to open verse selection modal, which will call handleRelatedVersesChange</Text>
            <View>{filterSettings?.selectedVerses?.map(verseObj => (
              <Text key={verseObj.reference}>{verseObj.reference}</Text>
            ))}</View>
            
            {/* TODO: debug why one of these conditions is met even after setting
            filterSettings.selectedVerses to a valid value? */}
            {/* if no selectedVerses */}
            {!filterSettings?.selectedVerses || filterSettings.selectedVerses.length < 1 &&
              <Text>none</Text>
            }
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => handleSubmit()}>Apply</Button>
            <Button onPress={handleCancel}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export { NoteFilterModal };
