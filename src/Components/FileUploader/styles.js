export default theme => ({
  dropzone: {
    border: '2px dashed rgba(0, 0, 0, 0.4)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  file: {
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #d8d8d8',
    width: '100%',
  },
  removeIcon: {
    marginLeft: theme.spacing.unit,
    width: 25,
    height: 25,
  },
});
