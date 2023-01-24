import React, {useState, useRef,useContext} from 'react';
import { UserContext } from '../Components/UserContext';
import Navbar from '../Components/Navbar';
import Scanner from '../Components/Scanner';
import Result from '../Components/Result';
import OrderSnackbar from '../Components/OrderSnackbar';

import { Button } from '@mui/material';
const Orders = () => {
    const {user}= useContext(UserContext)
    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState([]);
    const scannerRef = useRef(null);
console.log(user)
    return (
        <div>
            <Navbar/>
          
            <Button variant="contained" onClick={() => setScanning(!scanning) }>{scanning ? 'Stop Scan' : 'Start Scan'}</Button>
           
            <div ref={scannerRef} style={{position: 'relative', marginTop: '5rem'}}>
                {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
                <canvas className="drawingBuffer" style={{
                    margin: '0 auto',
                    position: 'absolute',
                    // top: '0px',
                    // left: '0px',
                    // height: '100%',
                    // width: '100%',
                   
                }} width="480" height="240" />
                {scanning ? <Scanner scannerRef={scannerRef} onDetected={(result) => setResults([...results, result])} /> : null}
            </div>
            <ul className="results">
                {results.map((result) => (result.codeResult && <Result key={result.codeResult.code} result={result} />))}
            </ul>
            <OrderSnackbar/>
        </div>
    );
};

export default Orders;