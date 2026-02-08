import type { Metadata } from 'next';
import ConstruccionPage from './ConstruccionPage';

export const metadata: Metadata = {
    title: 'Construcción Llave en Mano | TEKO Bienes Raíces',
    description: 'Construí tu casa propia con TEKO. Planes llave en mano, gestión integral y diseño personalizado en Paraguay.',
    keywords: ['construcción casas paraguay', 'casa llave en mano', 'construcción teko', 'planos de casas paraguay'],
};

export default function Page() {
    return <ConstruccionPage />;
}
