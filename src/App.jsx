import React, {
  useState
} from 'react';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import ColorForm from './ColorForm';
import initialColors from './initialColors';
import './App.css';

function App() {
  const basename = '/React-Router-ColorFactory';
  const [currentColors, setCurrentColorList] = useState(initialColors);
  const colorHandler = newColor => {
    if (!newColor ||
      !newColor.name ||
      !newColor.color)
      return;
    setCurrentColorList(prev => [newColor, ...prev]);
  };
  return (
    <Router basename={basename}>
      <Routes>
        <Route exact path="/colors"
          element={
            <>
              <h1>Color Factory</h1>
              <Link
                to="/colors/new"
                className="add-color-link"
              >Add Color</Link>
              <ColorList
                colors={currentColors} />
            </>
          } />
        <Route
          path="/colors/new"
          element={
            <ColorForm
              handlerAdd={colorHandler}
              currentColors={currentColors} />} />
        <Route
          path="/colors/:color"
          element={
            <ColorDetails colors={currentColors} />} />
        <Route
          path="*"
          element={
            <Navigate to="/colors" replace />} />
      </Routes>
    </Router>
  );
}

export default App;