import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Box } from './components/atom';
import MediaHome from './media/MediaHome';
import EditMedia from './media/EditMedia';
import NotFound from './components/NotFound';

const App = () => (
  <Box flex={1} padding={4}>
    <Box
      width={740}
      padding={3}
      margin="auto"
      border="1px solid"
      borderColor="silverPink"
      borderRadius={2}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <MediaHome />
          </Route>
          <Route path="/editMedia/:id">
            <EditMedia />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Box>
  </Box>
);

export default App;
