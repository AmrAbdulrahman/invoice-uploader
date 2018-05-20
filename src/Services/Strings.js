import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
  en: {
    navHeadline: 'Invoice Uploader',
    homePlaceholderMessage: `There's nothing to see here, keep moving...`,
    uploadInvoice: 'Upload Invoice',
    defaultFileUploadPlaceholder: 'Drag and drop files',
    loading: 'Loading...',
    uploading: 'Uploading...',
  },
});

// @TODO fetch lang key dynamically somehow
Strings.setLanguage('en');

export default Strings;
