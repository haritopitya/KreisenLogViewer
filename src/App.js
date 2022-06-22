import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import { HomeView, ViewerView } from './views';

function App() {
  return (
    <div css={appCSS}>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomeView />} />
        <Route path={'/viewer/:group/:number/:id'} element={<ViewerView />} />
      </Routes>
    </div >
  );
}

const appCSS = css({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#142137',
  textAlign: 'center'
})

export default () => (
  <App />
)
