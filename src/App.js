import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const sellOptionArr = ['Select', 'tile', 'box']

  const [areaWidth, setAreaWidth] = React.useState(0);
  const [areaHeight, setAreaHeight] = React.useState(0);
  const [areaAddPercent, setAreaAddPercent] = React.useState(0);
  const [tileWidth, setTileWidth] = React.useState(0);
  const [tileHeight, setTileHeight] = React.useState(0);
  const [sellOption, setSellOption] = React.useState(sellOptionArr[0]);
  const [pricePerPiece, setPricePerPiece] = React.useState(0);
  const [numberTilesPerBox, setNumberTilesPerBox] = React.useState(0);

  const area = areaWidth * areaHeight * 12 * 12;
  const areaAdd = area * areaAddPercent / 100;
  const areaTotal = Math.ceil(area + areaAdd);
  const tileArea = Math.ceil(tileWidth * tileHeight);
  const tileCount = Math.ceil(areaTotal / tileArea);
  const boxCount = Math.ceil(tileCount / numberTilesPerBox);
  const price = sellOption === 'tile'
    ? +(tileCount * pricePerPiece).toFixed(2)
    : +(boxCount * pricePerPiece).toFixed(2);


  return (
    <div className="row">
      <h1>Tile Shop</h1>
      <div className="input-group mb-3 w-25 p-3">
        <label className="input-group-text" htmlFor="autoSizingInput">
          Your area width, ft: </label>
        <input type="number" className="form-control"
               aria-describedby="autoSizingInput"
               value={areaWidth} onChange={(e) => setAreaWidth(+e.target.value)}/>
      </div>

      <div className="input-group mb-3 w-25 p-3">
        <label className="input-group-text" htmlFor="autoSizingInput">
          Your area height, ft: </label>
        <input type="number" className="form-control"
               aria-describedby="autoSizingInput"
               value={areaHeight} onChange={(e) => setAreaHeight(+e.target.value)}/>
      </div>

      <div className="input-group mb-3 w-25 p-3">
        <label className="input-group-text" htmlFor="autoSizingInput">
          Additional percent, %: </label>
        <input type="number" className="form-control"
               aria-describedby="autoSizingInput"
               value={areaAddPercent} onChange={(e) => setAreaAddPercent(+e.target.value)}/>
      </div>

      <div className="input-group mb-3 w-25 p-3">
        <label className="input-group-text" htmlFor="autoSizingInput">
          Your tile width, in: </label>
        <input type="number" className="form-control"
               aria-describedby="autoSizingInput"
               value={tileWidth} onChange={(e) => setTileWidth(+e.target.value)}/>

      </div>

      <div className="input-group mb-3 w-25 p-3">
        <label className="input-group-text" htmlFor="autoSizingInput">
          Your tile height, in: </label>
        <input type="number" className="form-control"
               aria-describedby="autoSizingInput"
               value={tileHeight} onChange={(e) => setTileHeight(+e.target.value)}/>

      </div>


      <div className="input-group mb-3 w-25 p-3">
        <label className="input-group-text" htmlFor="autoSizingInput">
          Choose your sell option:
        </label>
        <select className="form-select" aria-label="Default select example"
                value={sellOption}
                onChange={e => setSellOption(e.target.value)}>
          {sellOptionArr.map((el, i) =>
            <option key={i} value={el}>{el}</option>
          )}
        </select>
      </div>

      {sellOption === 'box' &&
        <div className="input-group mb-3 w-25 p-3">
          <label className="input-group-text" htmlFor="autoSizingInput">
            Number of tiles per box: </label>
          <input type="number" className="form-control"
                 aria-describedby="autoSizingInput"
                 value={numberTilesPerBox} onChange={(e) => setNumberTilesPerBox(+e.target.value)}/>
        </div>}


      <div className="input-group mb-3 w-25 p-3">
        <label className="input-group-text" htmlFor="autoSizingInput">
          Price per selected piece, $: </label>
        <input type="number" className="form-control"
               aria-describedby="autoSizingInput"
               value={pricePerPiece} onChange={(e) => setPricePerPiece(+e.target.value)}/>
      </div>

      <p><b>Area, in sq:</b> {areaTotal > 0 ? areaTotal : 0} </p>

      {sellOption === 'tile' ? <p><b>Tiles Amount:</b> {tileCount > 0 ? tileCount : 0}</p> :
        <p><b>Box Amount:</b> {boxCount > 0 && boxCount !== Infinity ? boxCount : 0}</p>}

      <p><b>Price, $:</b> {price > 0 && price !== Infinity ? price : 0} </p>


    </div>
  );
}

export default App;
