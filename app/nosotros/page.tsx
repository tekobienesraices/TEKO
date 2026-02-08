import type { Metadata } from 'next';
import NosotrosPage from './NosotrosPage';

export const metadata: Metadata = {
    title: 'Nosotros | TEKO Bienes Raíces',
    description: 'Conocé la historia de TEKO Bienes Raíces, nuestra misión de democratizar el acceso a la tierra en Paraguay y nuestro equipo.',
    keywords: ['teko bienes raices historia', 'mision teko', 'equipo teko', 'inmobiliaria paraguay'],
};

export default function Page() {
    return <NosotrosPage />;
}
