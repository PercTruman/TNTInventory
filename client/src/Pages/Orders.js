import React, {useState, useRef} from 'react';
import Navbar from '../Components/Navbar';
import Scanner from '../Components/Scanner';
import Result from '../Components/Result';
import OrderSnackbar from '../Components/OrderSnackbar';
import SwipeableTemporaryDrawer from '../Components/SwipeableDrawer';
const Orders = () => {
    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState([]);
    const scannerRef = useRef(null);

    return (
        <div>
            <Navbar/>
            <SwipeableTemporaryDrawer/>
            <button onClick={() => setScanning(!scanning) }>{scanning ? 'Stop' : 'Start'}</button>
            <ul className="results">
                {results.map((result) => (result.codeResult && <Result key={result.codeResult.code} result={result} />))}
            </ul>
            <div ref={scannerRef} style={{position: 'relative', border: '3px solid red'}}>
                {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
                <canvas className="drawingBuffer" style={{
                    position: 'absolute',
                    top: '0px',
                    // left: '0px',
                    // height: '100%',
                    // width: '100%',
                    border: '3px solid green',
                }} width="640" height="480" />
                {scanning ? <Scanner scannerRef={scannerRef} onDetected={(result) => setResults([...results, result])} /> : null}
            </div>
            <OrderSnackbar/>
        </div>
    );
};

export default Orders;