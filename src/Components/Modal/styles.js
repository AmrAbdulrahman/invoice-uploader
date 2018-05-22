export default theme => ({
  modalContent: {
    position: 'absolute',
    padding: theme.spacing.unit * 4,
    top: 50,
    left: '50%',
    transform: 'translateX(-50%)',
    maxHeight: 'calc(100vh - 150px)',
    overflowY: 'scroll',
    width: '70%',
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
});
