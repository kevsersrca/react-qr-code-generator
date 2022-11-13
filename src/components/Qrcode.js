import QRCode from 'qrcode'
import { useState } from 'react'
import { Button } from '@mui/material'
import Add from '@mui/icons-material/AddCircle';
import Download from '@mui/icons-material/CloudDownload';

function Qrcode() {
    const [url, setUrl] = useState('')
    const [qr, setQr] = useState('')
    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 2,
            color: {
                light: '#EEEEEEFF'
            }
        }, (err, url) => {
            if (err) return console.error(err)
            setQr(url)
        })
    }
    return (
        <div className="app">
            <h1 id="header">QR Generator</h1>
            <input 
                type="text"
                placeholder="e.g. https://google.com"
                value={url}
                onChange={e => setUrl(e.target.value)} />
            <Button variant="contained" onClick={GenerateQRCode} endIcon={<Add />} color="secondary">Generate</Button>
            {qr && <>
                <img src={qr} alt="qrcode"/>
                <Button variant='contained' color='secondary' href={qr} download='qrcode.png' endIcon={<Download />}>Download</Button>
            </>}
        </div>
    )
}
export default Qrcode