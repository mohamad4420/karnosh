import loadable from '@loadable/component'
import Button from '@mui/material/Button';


export default function Play(){
    return (
        <>
        <div className="MainPlay">
        <h1 className="playName">mohamad dawod mohamad abudaya</h1>
        <iframe id="playIfram" src="https://www.ok.ru/videoembed/2594698168982?Key=vTz9FpPiG2kwcVaZUiXnYg&Expires=1642816929"></iframe>
        <div className="serverRight">
        <Button variant="outlined" color='secondary'>Ok</Button>
        <Button variant="outlined" color='secondary'>Outlined</Button>
        <Button variant="outlined" color='secondary'>Outlined</Button>
        <Button variant="outlined" color='secondary'>Outlined</Button>
        <Button variant="outlined" color='secondary'>Outlined</Button>
        <Button variant="outlined" color='secondary'> Outlined</Button>


        </div>
        <div className="serverLeft">
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>


        </div>
        </div>
        </>
    )
}