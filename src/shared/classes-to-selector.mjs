export default function classesToSelector(classes = '') {
  return `.${classes.trim().split(' ').map(CSS.escape).join(' ').replace(/ /g, '.')}`;
}
