import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import { Blogs } from './components/Blog';
import { Post } from './components/Post';
import { ThemeProvider } from '@emotion/react';


const theme = {
    fontSizes: [
        12, 14, 16, 24, 32, 48, 64
    ],
    colors: {
        primary: '#07c',
        gray: '#f6f6ff',
    },
    buttons: {
        primary: {
            color: 'blue',
            bg: 'primary',
        },
        outline: {
            color: 'primary',
            bg: 'transparent',
            boxShadow: 'inset 0 0 0 2px'
        },
    },
    variants : {
      avatar: {
        width: 48,
        height: 48,
        borderRadius: 9999,
      }
    }
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
              <Router>
                      <NavigationBar />
                      <Switch>
                          <Route exact path="/" component={About} />
                          <Route path="/about" component={About} />
                          <Route path="/blog" component={Blogs} />
                          <Route path="/post/*" component={Post} />
                          <Route component={NoMatch} />
                      </Switch>
              </Router>
          </React.Fragment>
        </ThemeProvider>
    )
}

export default App
