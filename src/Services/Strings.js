import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
  en: {
    add: 'Add',
    addAdditionalFile: 'Add additional file',
    additionalFiles: 'Additional files',
    address: 'Address',
    addReceipient: 'Add Receipient',
    cancel: 'Cancel',
    checkReceipientErrors: 'Check receipient errors',
    defaultFileUploadPlaceholder: 'Drag and drop files',
    editReceipient: 'Edit Receipient',
    exactLengthValidation: 'Input length must be <%= length %>',
    fieldIsRequired: 'Field is required',
    fileDescription: 'File description',
    homePlaceholderMessage: `There's nothing to see here, keep moving...`,
    invoice: 'Invoice',
    invoiceAmount: 'Invoice Amount',
    invoiceAmountInEuro: 'Invoice amount in Euro',
    invoiceSentSuccessfully: 'Invoice sent successfully',
    loading: 'Loading...',
    maxLengthValidation: 'Maximum length is <%= length %>',
    minLengthValidation: 'Minimum length is <%= length %>',
    name: 'Name',
    navHeadline: 'Invoice Uploader',
    onlyNumbersValidation: 'Please enter only numbers',
    paymentTarget: 'Payment Target',
    paymentTargetDate: 'Payment target date',
    phone: 'Phone',
    removing: 'Removing...',
    receipient: 'Receipient',
    receipientIsRequired: 'Please fill receipient',
    save: 'Save',
    submit: 'Submit',
    surname: 'Surname',
    uploadInvoice: 'Upload Invoice',
    uploading: 'Uploading...',
    uploadAdditionalFile: 'Add additional file',
  },
});

// @TODO fetch lang key dynamically somehow
Strings.setLanguage('en');

export default Strings;
