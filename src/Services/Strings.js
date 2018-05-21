import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
  en: {
    navHeadline: 'Invoice Uploader',
    homePlaceholderMessage: `There's nothing to see here, keep moving...`,
    uploadInvoice: 'Upload Invoice',
    defaultFileUploadPlaceholder: 'Drag and drop files',
    loading: 'Loading...',
    uploading: 'Uploading...',
    removing: 'Removing...',
    fieldIsRequired: 'Field is required',
    invoice: 'Invoice',
    addAdditionalFile: 'Add additional file',
    additionalFiles: 'Additional files',
    uploadAdditionalFile: 'Add additional file',
  },
});

// @TODO fetch lang key dynamically somehow
Strings.setLanguage('en');

export default Strings;
