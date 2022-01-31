import vk3 from '../assets/images/cases/vk3.jpg';
import formd from '../assets/images/cases/formd.png';
import mesh from '../assets/images/cases/mesh.png';
import ncase from '../assets/images/cases/ncase.png';
import noctua from '../assets/images/coolers/noctua.jpg';
import black_ridge from '../assets/images/coolers/black_ridge.jpg';
import gigabyte from '../assets/images/mobos/gigabyte.png';
import asrock from '../assets/images/mobos/asrock.png';

const SHOP_DATA = [
    {
        id: '1',
        title: 'Velka 3',
        description: 'This case is ideal for those who want the smallest physically possible gaming PC. Made from thick steel and aluminum panels to give each part and the complete build a solid feel.',
        price: 159.99,
        src: vk3,
    },
    {
        id: '2',
        title: 'FormD T1',
        description: 'A portable and modular PC enclosure that can be assembled into three different configurations, allowing for better compatibility, thermal, and space optimization.',
        price: 175.00,
        src: formd,
    },
    {
        id: '3',
        title: 'SSUPD Meshlicious',
        description: 'Meshlicious is a combination of MESH and Delicious. There’s so much mesh that your mouth will water. Breathable, mesh panels lets you savor the airflow and minty temps.',
        price: 109.99,
        src: mesh,
    },
    {
        id: '4',
        title: 'NCASE M1',
        description: 'With its sleek, subtly-faceted brushed aluminum front panel, the M1 presents a refined, minimalist face to the world.',
        price: 200.00,
        src: ncase,
    },
    {
        id: '5',
        title: 'Noctua L9A Chromax Black',
        description: 'Fuses a height of only 37mm with strong performance and excellent quietness of operation, as well as 100% RAM and PCIe compatibility.',
        price: 44.95,
        src: noctua,
    },
    {
        id: '6',
        title: 'Alpenföhn Black Ridge',
        description: 'Black nickel plated, 6x6mm heatpipes, large heatsink, and a design that supports up to 33mm of maximum memory height - Black Ridge delivers pure performance in a minimum of space.',
        price: 68.30,
        src: black_ridge,
    },
    {
        id: '7',
        title: 'GIGABYTE B550I Aorus Pro AX',
        description: "Combines a wave of premium features combined with AMD's B550 chipset. It includes compatibility for PCIe 4.0 devices with supported processors, dual PCIe M.2 slots, and 2.5 gigabit Ethernet.",
        price: 205.99,
        src: gigabyte,
    },
    {
        id: '8',
        title: 'ASRock B550 Phantom Gaming-ITX',
        description: "Phantom Gaming is designed by gamers and for gamers! Underneath its relentless appearance lie plentiful gaming oriented features and excellent gaming capabilities. It’s all about bringing a new gaming experience to gamers!",
        price: 189.00,
        src: asrock,
    },

]

export default SHOP_DATA;