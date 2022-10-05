import ComputerIcon from '@mui/icons-material/Computer';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TvIcon from '@mui/icons-material/Tv';
import SpeakerIcon from '@mui/icons-material/Speaker';

const Categorias = [
    {
        id: 0,
        nombre: 'computadoras',
        ruta: '/categorias/computadoras',
        icono: <ComputerIcon />
    },
    {
        id: 1,
        nombre: 'celulares',
        ruta: '/categorias/celulares',
        icono: <SmartphoneIcon />
    },
    {
        id: 2,
        nombre: 'consolas',
        ruta: '/categorias/consolas',
        icono: <SportsEsportsIcon />
    },
    {
        id: 3,
        nombre: 'televisores',
        ruta: '/categorias/televisores',
        icono: <TvIcon />
    },
    {
        id: 4,
        nombre: 'audio',
        ruta: '/categorias/audio',
        icono: <SpeakerIcon />
    }
]

export default Categorias