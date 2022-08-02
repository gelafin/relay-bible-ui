import { React, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Provider, Portal, Dialog, Button, Paragraph } from 'react-native-paper';

// custom components
import { FormLabel } from './FormLabel';

/**
 * @param onSubmit: called with argument object
 *  {
 *      selectedVerses: [{
 *                          title: string, body: string, linkedVerses: string[], isPublic: bool
 *      }]
 *  }
 */
const NoteFilterModal = ({setShouldShowDialog, onSubmit, onCancel, initialFilterSettings}) => {
  const [filterSettings, setFilterSettings] = useState(initialFilterSettings || {});
  const hideDialog = () => setShouldShowDialog(false);

  const handleCancel = () => {
    hideDialog();
    onCancel && onCancel();
  };

  const handleSubmit = () => {
    hideDialog();
    onSubmit(filterSettings);
  };

  return (
    <Provider>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog}>
          <Dialog.Title>
            <Text>Filters</Text>
          </Dialog.Title>
          <Dialog.Content>
            <FormLabel label="Related to verses"></FormLabel>
            <Text>TODO: button here to open verse selection modal</Text>
            <View>{filterSettings?.selectedVerses?.map(verseData => (
              <Text key={verseData.title + verseData.body}>{verseData.body}</Text>
            ))}</View>
            
            {/* if no selectedVerses */}
            {!filterSettings?.selectedVerses || filterSettings.selectedVerses.length < 1 &&
              <Text>none</Text>
            }
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleSubmit}>Apply</Button>
            <Button onPress={handleCancel}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export { NoteFilterModal };
