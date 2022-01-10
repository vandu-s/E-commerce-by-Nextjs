import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh!important',
  },
  footer: {
    marginTop: 10,

    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export default useStyles;
