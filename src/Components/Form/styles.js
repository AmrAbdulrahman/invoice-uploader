export default theme => ({
  form: {
    marginTop: theme.spacing.unit * 2,
    '&:first-child': {
      marginTop: 0,
    }
  },
  formGroup: {
    position: 'relative',
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    '&:first-child': {
      marginTop: 0,
    }
  },
  formGroupWithTitle: {
    marginTop: theme.spacing.unit * 6.5,
    '&:first-child': {
      marginTop: theme.spacing.unit * 5,
    }
  },
  groupTitle: {
    position: 'absolute',
    left: 0,
    top: theme.spacing.unit * -4,
  },
  formElement: {
    margin: `${theme.spacing.unit}px 0`,
    padding: `0 ${theme.spacing.unit}px`,
    display: 'flex',
    alignItems: 'center',
  },
});
