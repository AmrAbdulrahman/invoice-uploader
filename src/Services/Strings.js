import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
  en: {
    add: 'Add',
    addAdditionalFile: 'Add additional file',
    additionalFiles: 'Additional files',
    cancel: 'Cancel',
    defaultFileUploadPlaceholder: 'Drag and drop files',
    fieldIsRequired: 'Field is required',
    fileDescription: 'File description',
    homePlaceholderMessage: `There's nothing to see here, keep moving...`,
    invoice: 'Invoice',
    invoiceAmount: 'Invoice Amount',
    invoiceAmountInEuro: 'Invoice amount in Euro',
    loading: 'Loading...',
    maxLengthValidation: 'Maximum length is <%= length %>',
    minLengthValidation: 'Minimum length is <%= length %>',
    navHeadline: 'Invoice Uploader',
    onlyNumbersValidation: 'Please enter only numbers',
    paymentTarget: 'Payment Target',
    paymentTargetDate: 'Payment target date',
    removing: 'Removing...',
    submit: 'Submit',
    uploadInvoice: 'Upload Invoice',
    uploading: 'Uploading...',
    uploadAdditionalFile: 'Add additional file',
  },
});

// @TODO fetch lang key dynamically somehow
Strings.setLanguage('en');

export default Strings;
