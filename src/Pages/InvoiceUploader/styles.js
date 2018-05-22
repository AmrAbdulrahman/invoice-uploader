export default theme => ({
  actionsWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    '& > *': {
      marginLeft: theme.spacing.unit,
    }
  },
  requestActions: {
    marginTop: theme.spacing.unit * 2,
  },
  additionalFiles: {
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 3,
  },
  additionalFile: {
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit,
    border: '1px solid #d6d6d6',
    backgroundColor: '#fbfbfb',
    '&:first-child': {
      marginTop: 0,
    },
  },
  additionalFileName: {
    fontWeight: 'bold',
  },
  removeIcon: {
    marginLeft: theme.spacing.unit,
    width: 25,
    height: 25,
  },
  buttonWithError: {
    borderBottom: '2px solid red',
  },
  errorMessage: {
    marginLeft: theme.spacing.unit,
    color: 'red',
  },
});
