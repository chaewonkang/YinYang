const layoutStyle = {
  margin: 20,
  marginRight: 0,
  overflowX: 'hidden',
  overflowY: 'hidden',
};

const Layout = (props) => <div style={layoutStyle}>{props.children}</div>;

export default Layout;
