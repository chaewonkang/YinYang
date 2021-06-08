const layoutStyle = {
  marginLeft: 20,
  marginRight: 0,
  marginTop: 15,
  overflowX: 'hidden',
  overflowY: 'hidden',
};

const Layout = (props) => <div style={layoutStyle}>{props.children}</div>;

export default Layout;
