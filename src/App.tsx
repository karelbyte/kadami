import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainBar } from './components/organisms/main-bar';
import { MainDrawer } from './components/organisms/main-memu';
import Wrapper from './components/atoms/Wrapper';
import PageView from './components/atoms/PageView';
function App() {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(true)
  return (
    <React.Fragment>
      <MainBar handleMainDrawer={setOpenDrawer} openDrawer={openDrawer} />
      <Wrapper>
        <MainDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <PageView>
          <Outlet />
        </PageView>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
