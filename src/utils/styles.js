import styled from 'styled-components';

export const App = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Container = styled.div`
  background-color: 'rgba(227, 227, 227, 0.5)';
`;

export const Content = styled.div`
  min-height: 95vh;
  overflow: hidden;
  background-color: 'rgba(227, 227, 227, 0.5)';
`;
// Content.displayName = 'Content';
// App.displayName = 'App';